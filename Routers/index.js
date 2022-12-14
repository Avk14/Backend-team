const express=require('express') 
const router = express.Router() 
const bodyparser=require('body-parser') 
const Userprofile=require('../Controllers/UserController')
const Job=require('../Controllers/JobController')
const Service = require('../Controllers/ServiceController')
const Post=require('../Controllers/PostController')
router.use(bodyparser.urlencoded({extended:true})) 
router.use(bodyparser.json()) 
router.use("/Userprofile",Userprofile) 
router.use("/Job",Job) 
router.use("/Service",Service)
router.use('/Post',Post)
module.exports=router