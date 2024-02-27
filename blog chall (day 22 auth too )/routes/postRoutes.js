const routerBlog = require('express').Router();
const {addBlog,getAllBlogs,getBlog,deletePost,updatePost} =
 require("../controllers/postController")
const {ensureToken} = require('../middlewares/middleware');


routerBlog.get("/",ensureToken, getAllBlogs)
.get("/:id",ensureToken,getBlog)
.post("/", addBlog)
.put( "/:id" ,updatePost)  
.delete("/:id", deletePost);




module.exports = routerBlog