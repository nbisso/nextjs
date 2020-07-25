var express = require('express');
var router = express.Router();
var db = require('firebase/app');
require('firebase/database');



module.exports = function (app) {
    router.get('/login', function (req, res) {
        res.cookie("token", "lksvdnklsdnklsv", {
            httpOnly: true
        })
        res.send("ok")
    });

    router.get('/test', (req, res) => {
        db.database().ref('test').once('value').then(function (snapshot) {
            console.log(snapshot)
            res.send("hola")
        });

    })

    return router;
}