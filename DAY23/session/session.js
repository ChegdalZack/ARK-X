const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());
//const auth = require('./middleware/middleware');
const sessionVerification = require('./middleware/middleware')
const cookie = require('cookie-parser');
app.use(cookie())



const users = [];


app.use(
    session({
      secret: 'mySecretKey', // Secret key used to sign the session ID cookie
      resave: false, // Whether to save the session for every request, even if it hasn't changed
      saveUninitialized: true // Whether to save uninitialized sessions (new but not modified)
    })
  );

  app.get('/', (req, res) => {
    res.send('welcome');

});


  app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({
      name: name,
      email: email,
      password: hashedPassword
    });
    res.send(users);
  });

  app.post('/login', (req,res) =>{
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);
    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.user = user; // create iDuser and store into cookie
      
      res.send(`welcome *${user.name}`);
    } else {
      res.status(401).send('Invalid credentials');
    }
  });



  app.get('/protected', sessionVerification,(req, res) =>{
    res.send("this is a private place ")


  });




  app.listen(3000);


    

