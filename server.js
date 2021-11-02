const express = require('express')
const app = express()
const GoogleStrategy = require("passport-google-oauth2").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
const PORT = process.env.PORT || 3001
app.get('/', (req, res) => res.send('Hello World'))



// passport.use(new FacebookStrategy({
//     clientID:"1298463487242585",
//     clientSecret: "2af81dc5de4db6140bea7c7ad565f50c",
//     callbackURL: "http://localhost:3001/auth/facebook/login"
//     },
//     function(accessToken, refreshToken, profile, cb) {
//         user.findOrCreate({ afcebookID: profile.id}, function (err, user) {
//             return cb(err, user);
//         });
// }));

// app.get('/auth/facebook',
//     passport.authenticate('facebook'));

// app.get('/auth/facebook/login',
//     passport.authenticate('facebook', { failureRedirect: '/login'}),
//     function(req, res) {
//         res.redirect('/login');
//     });

app.listen(3001, () => {
    console.log(`Server is running on port : ${PORT}`)
})
module.exports = app

//CLIEND_ID_FD=1298463487242585
//CLIEND_SECRET_FB=2af81dc5de4db6140bea7c7ad565f50c