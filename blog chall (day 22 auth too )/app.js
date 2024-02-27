const express = require("express");
const blogRouter = require("./routes/postRoutes")
const userRouter = require("./routes/userRoutes");
const {log} = require('./middlewares/middleware');
// const { login,register, getUsers } = require("./controllers/userController");
// const { readUsers } = require("./modules/user");
const PORT = 2000;
const app = express();
app.use(express.json());
app.use(log);

app.use("/blogs",blogRouter)
app.use('/users/',userRouter)





app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});