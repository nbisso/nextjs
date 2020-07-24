const express = require('express')
const next = require('next')
const cookieParser = require("cookie-parser")
const { parse } = require('url')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


const authRoutes = ["/"]

app.prepare()
    .then(() => {
        const server = express()

        server.use(cookieParser())

        server.get('/test', (req, res) => {
            res.send("hola")
        })

        server.get('/api/login', (req, res) => {

            res.cookie("token", "lksvdnklsdnklsv", {
                httpOnly: true
            })
            res.send("ok")
        })



        server.get('*', (req, res, next) => {
            const parsedUrl = parse(req.url, true)
            const { pathname, query } = parsedUrl
            console.log("VALIDATE : " + pathname)

            if (authRoutes.includes(pathname)) {
                let cookie = ""
                if (req.cookies) {
                    cookie = req.cookies["token"]
                }
                console.log("AUTH LOG")
                console.log(cookie)
                let itsValid = cookie === "lksvdnklsdnklsv"
                if (!itsValid) {
                    res.redirect("/about")
                    return;
                }
            }
            next();
        }, (req, res) => {
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