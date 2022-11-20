const express = require('express') 

const router=express.Router()

const PostsContr=require("../Services/PostsFunctions")

router.get('/createPost',PostsContr.create_post)
router.get('/deletePost',PostsContr.delete_post)
router.get('/getPost',PostsContr.get_post)
module.exports=router