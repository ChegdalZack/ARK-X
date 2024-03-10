const passport  = require('passport');
const cookieSession = require('cookie-session');

require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL
  },
  (accessToken, refreshToken, profile, done) => {
    // Verify user's profile and create or retrieve user from database
    // Call done() with the user object
    return done(null, { id: profile.id, displayName: profile.displayName });

  }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // Retrieve user from database using id
    // Call done() with the user object
});


// app.get('/auth/google', passport.authenticate('google', {
//     scope: ['profile']
//   }));
  
//   app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
//     // The user is now authenticated and the user object is available in req.user.
//     res.redirect('/');
//   });
  
//   app.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
//   });
  
  
  
  
// //   function(issuer, audience, profile, cb) {
// //     //not interested in passport profile normalization, 
// //     //just the Auth0's original profile that is inside the _json field
// //     return cb(null, profile._json);
// //   }));