const postModel = require('../models/post');
const express = require("express");
const app = express();
app.use(express.json());



const addPost = (req,res)=> {
    const {title, content} = req.body;
    const AuthorId = req.user.id;
    console.log(AuthorId, 'author id ');
    postModel.create({AuthorId,title,content})
    .then((data)=>(res.send('post created succesfully')))
    .catch((err)=>{ res.send("Error in user creation")});
}

const getAllPosts = async (req,res)=>{
    postModel.find()
  .then((data)=>{res.send(data);
   });
}


const deletePost = async (req , res )=>{
try {
        const post = await postModel.find({title:req.params.title});
        // console.log(post[0])
        
            if(req.user.id ===post[0].AuthorId){
                const deletedPost = await postModel.findOneAndDelete(req.params.title);
                if (!deletedPost) {
                    return res.status(404).json({ msg: "No post found with the given title" });
          }
                console.log('The post has been deleted successfully', deletedPost);
                return res.status(200).json({ msg: "Post Deleted Successfully", deletedPost });
            }
            else{
                return res.status(404).json({msg:"This is not your Post!"});
            }
}
       catch (error) {
        console.error('Error found while deleting your post:', error);
        return res.status(500).json({ msg: "Internal Server Error" });
    }

 }
 
 const updatePost = (req, res) =>{    
     const title = req.params.title    
      const updatePost = req.body    
       postModel.findOneAndUpdate({title}, updatePost ,{new:true})    
        .then((post)=>{
            if(post){ res.status(200).json(post)}
            else{throw new Error("No post found")}} ) 
            .catch((error)=> res.status(404).json( error.message)) };





module.exports = {addPost,deletePost,getAllPosts,updatePost};