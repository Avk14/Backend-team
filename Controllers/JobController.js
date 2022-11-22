const express = require('express') 

const router=express.Router()

const JobContr=require("../Services/JobFunctions")

router.get('/createJob',JobContr.create_Job)

router.get('/deleteJob',JobContr.delete_Job)

router.get('/getJob',JobContr.get_Job)

module.exports=router