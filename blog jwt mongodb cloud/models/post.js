const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    isDeleted:{type: Boolean,default:false},
    AuthorId: String,  // user id who posted the blog
  });



  
  postModel = mongoose.model('post', postSchema);





  module.exports = postModel