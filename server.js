const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const { connect } = require('http2')
const { createConnection } = require('net')
// const GoogleStrategy = require("passport-google-oauth2").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
const PORT = process.env.PORT || 3001
app.get('/', (req, res) => res.send('Hello World'))

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "192.168.64.2",
    user: "root",
    password: "1234",
    database: "myholiday"
})

createConnection.connect((error) => {
    if (err) {
        console.log(err);
    } else{
        console.log('Connected...');
    }
})
module.exports = connection;


app.get('/myholiday',(req,res) => {
    db.query("SELECT * FROM myholiday",(err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send();
        }
    });
});
module.exports = app


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

//module.exports = app

//CLIEND_ID_FD=1298463487242585
//CLIEND_SECRET_FB=2af81dc5de4db6140bea7c7ad565f50c