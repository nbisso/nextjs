const { parse } = require('url')
var jwt = require('jsonwebtoken');
const { SECRET_JWT } = require('../util/enviroment');
const authRoutes = []

function setUserContext(req, res) {
    let cookie = ""

    if (req.cookies) {
        cookie = req.cookies["token"]
    }

    try {
        let user = jwt.verify(cookie, SECRET_JWT)
        req.user = user;
    } catch (err) {
        req.user = null;
    }
}

module.exports = function (req, res, next) {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    console.log("VALIDATE : " + pathname)

    setUserContext(req, res)

    if (authRoutes.includes(pathname)) {
        if (req.user == null) {
            res.redirect('/login', 301);
        }
    }
    next();
}