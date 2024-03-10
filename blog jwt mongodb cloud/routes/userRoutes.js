const express = require('express')
const userRouter  = express.Router()
const {login,register} = require('../controllers/userController')


userRouter.post('/register',register)
.post("/login",login)


module.exports= userRouter;
