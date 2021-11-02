var jwt = localStorage.getItem("jwt");
if (jwt != null){
    window.location.href = './index.html';
}

function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://www.mecallapi.com/api/login");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "username" : username,
        "password" : password
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4){
            const objects = JSON.parse(this.responseText);
            console.log(objects)
            if(objects['status']== 'ok'){
                localStorage.setItem("jwt", objects["accessToken"]);
                Swal.fire({
                    title: objects['message'],
                    icon: 'success'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.href = './index.html';
                    }
                  })
            } else {
                Swal.fire(
                    objects['status'],
                    objects['message'],
                    'error'
                  )
            }
        }
    }
    return false;
}

// logingoogle

// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     $("#name").text(profile.getName());
//     $("#email").tetx(profile.getEmail());
//     $("#image").attr('src', profile.getImageUrl());
//     $(".data").css("display","block");
//     $(".g-signin2").css("display","none");
//   }

// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       alert("You have been signed out successfully");
//       $(".g-signin2").css("display","block");
//       $(".data").css("display","none");
//     });
// }

// loginfacebook

// app.use(passport.initialize())
// var passport = require('passport')
//   , FacebookStrategy = require('passport-facebook').Strategy;

// passport.use(new FacebookStrategy({
//     clientID: "1253294465098287",
//     clientSecret: "cbfe4b3d9b88e25c5cb96f67e6b89223",
//     callbackURL: "http://localhost:3001/auth/facebook/callback"
//   },
//   function(req,accessToken, refreshToken, profile, done) {
//     try{
//         console.log(req);
//         if(profile){
//             req.user = profile;
//             done(null,profile);
//         }
//     }catch(err){
//         done(err);
//     }
//   })
// );

// // Redirect the user to Facebook for authentication.  When complete,
// // Facebook will redirect the user back to the application at
// //     /auth/facebook/callback
// app.get('/auth/facebook', passport.authenticate('facebook'));

// // Facebook will redirect the user to this URL after approval.  Finish the
// // authentication process by attempting to obtain an access token.  If
// // access was granted, the user will be logged in.  Otherwise,
// // authentication has failed.

// app.get('/auth/facebook/callback', passport.authenticate('facebook', { 
//     session: false, 
//     failureRedirect: 'http://localhost:3001' 
//   }),(req,res)=>{
//     res.redirect('http://localhost:3001/')
//   });


//facebook
//id = 1298463487242585
//secret = 2af81dc5de4db6140bea7c7ad565f50c
//google
//cliend_id 134840199377-pmc05ehggkn1tvbc8ch8pm6t76bne6ii.apps.googleusercontent.com