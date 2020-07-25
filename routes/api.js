var express = require('express');
var router = express.Router();
var firebase = require('firebase/app');
require('firebase/database');
require('firebase/auth');

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


module.exports = function (app) {



    passport.use(new GoogleStrategy({
        clientID: process.env.googleClientID,
        clientSecret: process.env.googleClientSecret,
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
        function (accessToken, refreshToken, profile, done) {

            return done(null, { accessToken, ...profile });
            // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            //     return done(err, user);
            // });
        }
    ));

    // GET /auth/google
    //   Use passport.authenticate() as route middleware to authenticate the
    //   request.  The first step in Google authentication will involve
    //   redirecting the user to google.com.  After authorization, Google
    //   will redirect the user back to this application at /auth/google/callback
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['https://www.googleapis.com/auth/plus.login']
        }));

    // GET /auth/google/callback
    //   Use passport.authenticate() as route middleware to authenticate the
    //   request.  If authentication fails, the user will be redirected back to the
    //   login page.  Otherwise, the primary route function function will be called,
    //   which, in this example, will redirect the user to the home page.
    app.get('/auth/google/callback',
        passport.authenticate('google',
            {
                failureRedirect: '/about',
                session: false
            }),
        function (req, res) {
            console.log(req.user)
            let e = JSON.stringify(req.user)
            var credential = firebase.auth.GoogleAuthProvider.credential(null, req.user.accessToken);

            // Sign in with credential from the Google user.
            firebase.auth().signInWithCredential(credential).then(r => {
                console.log(r)
            }).catch(function (error) {
                console.log(error)
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
            res.redirect('/succes?userinfo=' + e, 301);
        });




    router.get('/login', function (req, res) {
        res.cookie("token", "lksvdnklsdnklsv", {
            httpOnly: true
        })
        res.send("ok")
    });

    router.get('/test', (req, res) => {
        firebase.database().ref('test').once('value').then(function (snapshot) {
            console.log(snapshot)
            res.send("hola")
        });

    })

    return router;
}