const express = require('express');
 const app = express();
//  const flash = require('connect-flash');
app.use(express.json())
 const passport = require('passport');
 const LocalStrategy = require('passport-local').Strategy;
 const session = require('express-session');
// Other imports and configurations will go here
const PORT = 3000;
const users = [
    { id: 1, username: 'user', password: 'password' }
    ];

// Use session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
    }));
   // Initialize Passport
    app.use(passport.initialize());
    app.use(passport.session());

    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
        return next();
        }
        res.redirect('/login');
        }
      
      
        app.get('/protected', ensureAuthenticated, (req, res) => {
        res.send('This is a protected route');
        });

// Configure local strategy for authentication
 

        passport.use(new LocalStrategy(
            (username, password, done) => {
            const user = users.find(u => u.username === username);
            if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password !== password) {
            return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
            }
            ));



            passport.serializeUser((user, done) => {
                done(null, user.id);
                });
               passport.deserializeUser((id, done) => {
                const user = users.find(u => u.id === id);
                done(null, user);
                });


app.post('/login', passport.authenticate('local',{
 successRedirect: '/profile',
 failureRedirect: '/login',
//  failureFlash: true
 })
 );


app.get('/profile',ensureAuthenticated, (req, res) => {
 if (req.isAuthenticated()) {
 res.send('Welcome to your profile');
 } else {
 res.redirect('/login');
 }
 });

 
app.get('/login', (req, res) => {
 res.send('Login page');
 });

 app.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect('/login');
    })
    })






app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
 });