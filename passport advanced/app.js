const express = require('express');
const passport  = require('passport');
require('dotenv').config();
const app = express();
require('./auth');
const PORT = 5001;
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

app.get('/',(req,res)=>{
    res.send('<a href="/auth/google">authenticate with google </a>')
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/profile');
  }
);


app.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
        // Access user data using req.user
        res.send(`Welcome, ${req.user.displayName}!`);
    } else {
        res.redirect('/login');
    }
});

app.get('protected/', (req, res) => {
    res.send('hello')
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });