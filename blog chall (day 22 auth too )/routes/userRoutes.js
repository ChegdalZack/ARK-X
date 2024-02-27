const routerUser = require('express').Router();
const {getUsers,register,login } = require('../controllers/userController')

routerUser.get("/", getUsers)
.post("/user/register", register)
.post("/user/login",login)







module.exports=routerUser;
