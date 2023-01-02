const express = require('express') 

const router=express.Router()

const UserProfContr=require("../Services/UserProfileFunctions")

router.use(express.urlencoded({extended: false})) 

router.use(express.json()) 

router.get('/login',UserProfContr.getLogin)

router.post('/upload',UserProfContr.uploadProfilePhoto)

router.post('/register', UserProfContr.registerUser)

router.post('/updateprofile',UserProfContr.updateUserProfile)

router.post('/find',UserProfContr.getUData)

router.delete('/delete', UserProfContr.deleteUser)

router.get('/auth' , UserProfContr.googleLogin)

module.exports = router