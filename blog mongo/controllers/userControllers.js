const userModel = require('../models/user');
const express = require("express");
const app = express();

app.use(express.json());
// GET all Users



const register = (req,res)=> {
    const data = req.body;
    userModel.create(data)
    .then((data)=>(console.log('user created succesfully',data)))
    .catch((err)=>{ console.error("Error in user creation", err)}); 
    res.send(data)
}



module.exports=register;