const path = require('path');
const {createUsers } = require("../modules/user");
const usersData = require('../modules/users.json');
const postData = require('../modules/data.json');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.getUsers = (req,res) =>{
    const users = usersData;
    res.send(users)
}

exports.register = (req, res) => {
  const { username, password } = req.body;
    console.log(username,password)
  const existingUser = usersData.find((user) => user.username == username);
console.log(usersData)
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const id = usersData.length + 1;

  const newUser = { id,username, password }

  usersData.push(newUser);
  createUsers(usersData);

  res.status(201).json({ message: 'User registered successfully', newUser });
};


exports.login = (req, res) => {
  const { username, password } = req.body;

 const user = usersData.find((user) => user.username === username && user.password === password);
  const token = jwt.sign(user,process.env.tokenUser,{expiresIn:'3h'});
  
  console.log(token)

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  res.status(200).json({ message: 'Logged in successfully', user });
};









// Create a new user 
// exports.register = async (req,res)=>{
//     const username= req.body.username;
//     const password = req.body.password;
//     try {
//         if(!username || !password){
//             return res.status(400).json({message : "Missing fields"})
//         }else{
//             const userID = await createUsers(username,password);
//             //Add the user to the list of users
//             users.push({id:userID, username:username});
//             //Save the updated list of users back into json file
//             fs.writeFileSync(
//                 path.join(__dirname,'../data/users.json'),
//                 JSON.stringify(users)
//             );
//             res.status(201).json({userID:userID, message:"User created!"})
//             }
        
//     } catch (error) {
//         console.log(error)
//         if(error.code == '23505'){
//             //duplicate username
//             res.status(409).json({message:'Username already exists'})
//             } else {
//                 //Server error
//                 res.status(500).json({message:'Server Error!'})
//             }
//     }}
    

// Get one user by ID