var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");
var jwt = require('jsonwebtoken');
const enviroment = require('../util/enviroment');


module.exports = function (app) {

    router.get("/auth", (req, res) => {
        let token = req.query.tokenId;

        if (!token) {
            res.redirect('/login', 301);
        }

        admin.auth().verifyIdToken(token).then(r => {
            var token = jwt.sign(r, enviroment.SECRET_JWT);

            res.cookie("token", token, {
                httpOnly: true
            })

            res.redirect('/', 301);
        }).catch(err => {
            res.redirect('/login', 301);
        })
    })

    return router;
}