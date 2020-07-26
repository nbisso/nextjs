const express = require('express')
const next = require('next')
const cookieParser = require("cookie-parser")

const dev = process.env.NODE_ENV !== 'production'

const authMiddleware = require("./middleware/authPage")
const apiroutes = require("./routes/api")

var admin = require('firebase-admin');
const enviroment = require('./util/enviroment')
const serviceAccount = enviroment.FIREBASE_ADMIN_CONFIG;

class Application {
    constructor(firabaseConfig) {
        this.firabaseConfig = firabaseConfig;
    }

    initFirabase() {
        admin.initializeApp({
            databaseURL: "https://cocinando-766f0.firebaseio.com",
            credential: this.firabaseConfig
        });
    }

    async init() {
        const app = next({ dev })
        const handle = app.getRequestHandler()

        app.prepare()
            .then(() => {
                const server = express()

                this.initFirabase();

                server.use(cookieParser())

                server.use(express.json())

                server.use("/api", apiroutes(server))

                server.get('*', authMiddleware, (req, res) => {
                    return handle(req, res)
                })

                const port = enviroment.PORT;

                server.listen(port, (err) => {
                    if (err) throw err
                    console.log('> Ready on http://localhost:' + port)
                })
            })
            .catch((ex) => {
                console.error(ex.stack)
                process.exit(1)
            })
    }

}

let app = new Application(
    admin.credential.cert(serviceAccount)
);

app.init()
