const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes')
app.use(express.json());


mongoose
  .connect("mongodb://localhost:27017/dbtest")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));

app.get('/', (req,res)=>{
    res.send(`<h1>Hello World!</h1>`);
})

app.use('/users',userRouter)



app.listen(port, () => {
    console.log(`Server is running on  http://localhost:${port}`)
})