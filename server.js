const express = require('express')
const next = require('next')
const cookieParser = require("cookie-parser")

const dev = process.env.NODE_ENV !== 'production'

const authMiddleware = require("./middleware/authPage")
const apiroutes = require("./routes/api")

var admin = require('firebase-admin');
const serviceAccount = require("./cocinando-766f0-firebase-adminsdk-4cczq-1072cf404d.json")

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

                server.listen(3000, (err) => {
                    if (err) throw err
                    console.log('> Ready on http://localhost:3000')
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
