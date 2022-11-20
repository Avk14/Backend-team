const express = require('express') 

const router=express.Router()

const UserProfContr=require("../Services/UserProfileFunctions")

router.use(express.urlencoded({extended: false})) 

router.use(express.json()) 

router.get('/login',UserProfContr.getLogin)

router.get('/upload',UserProfContr.uploadProfilePhoto)

router.get('/register', UserProfContr.registerUser)

router.patch('/updateprofile',UserProfContr.updateUserProfile)

router.get('/find',UserProfContr.getUData)

router.delete('/delete', UserProfContr.deleteUser)

router.get('/auth' , UserProfContr.googleLogin)

module.exports = router