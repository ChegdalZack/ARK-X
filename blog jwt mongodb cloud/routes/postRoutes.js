const express = require('express')
const postRouter  = express.Router()
const {addPost,deletePost,getAllPosts,updatePost} = require('../controllers/postController')
const ensureToken = require('../middlewares/middlewares')


postRouter.post('/new',ensureToken,addPost)
.delete('/:title',ensureToken,deletePost)
.get('/all',ensureToken,getAllPosts)
.update('/update',ensureToken,updatePost)


module.exports= postRouter;
