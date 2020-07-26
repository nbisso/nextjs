const { parse } = require('url')
const authRoutes = ["/"]


module.exports = function (req, res, next) {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    console.log("VALIDATE : " + pathname)

    // if (authRoutes.includes(pathname)) {
    //     let cookie = ""
    //     if (req.cookies) {
    //         cookie = req.cookies["token"]
    //     }
    //     console.log("AUTH LOG")
    //     console.log(cookie)
    //     let itsValid = cookie === "lksvdnklsdnklsv"
    //     if (!itsValid) {
    //         res.redirect("/about")
    //         return;
    //     }
    // }
    next();
}