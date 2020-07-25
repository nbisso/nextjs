const express = require('express')
const next = require('next')
const cookieParser = require("cookie-parser")
var firebase = require("firebase/app");
const dev = process.env.NODE_ENV !== 'production'

const authMiddleware = require("./middleware/authPage")
const apiroutes = require("./routes/api")


class Application {
    constructor(firabaseConfig) {
        this.firabaseConfig = firabaseConfig;
    }

    initFirabase() {
        firebase.initializeApp(this.firabaseConfig);
    }

    async init() {
        const app = next({ dev })
        const handle = app.getRequestHandler()

        app.prepare()
            .then(() => {
                const server = express()

                this.initFirabase();

                server.use(cookieParser())

                server.use("/api", apiroutes())

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

let app = new Application({
    apiKey: "AIzaSyCwk-9Lo6_9k2LZGk6FrH-n4rWXv3xWvrQ",
    authDomain: "cocinando-766f0.firebaseapp.com",
    databaseURL: "https://cocinando-766f0.firebaseio.com",
    projectId: "cocinando-766f0",
    storageBucket: "cocinando-766f0.appspot.com",
    messagingSenderId: "311671787189",
    appId: "1:311671787189:web:74c9ad404c4157ff9af8fc",
    measurementId: "G-XW842M2D1R"
});

app.init()
