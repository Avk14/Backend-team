
const mongoose=require("mongoose") 
const cloudinary=require("cloudinary").v2
require('dotenv').config()
const User=require("../Models/User") 


const url =process.env.Mongo_url
const db = (url) 
mongoose.Promise = global.Promise 
mongoose.connect(db, { useNewUrlParser : true, 

    useUnifiedTopology: true }, function(error) {
    
        if (error) {
    
            console.log("Error!" + error) 
    
        }
}) 


const getLogin=(req,res)=>{
    User.findOne(req.body,function(err,data){
        if(err)
        {
            console.log(err) 
        }
        else
        {
            if(data==null)
            {
                res.send("Incorrect credentials")
            }
            else{
                res.send("Successful")
            }
        }
    }) 
}


// "C:\\Users\\anura\\OneDrive\\Desktop\\WIN_20221104_14_21_47_Pro.jpg"
const uploadProfilePhoto=(req,res)=>{
    cloudinary.uploader.upload(req.body.photoPath,{
        resource_type:"image",
        "public_id":'Finalproject/profilepic/'+req.body._id+''
    }).then((result)=>{
        User.findOneAndUpdate({_id:req.body._id},{profile_pic:result.url},function(err,data){
            if(err){
                console.log("error"+err) 
            }
            else{
                console.log("Link-Uploaded")
                // res.send(data) 
            }
        }) 
        res.send(JSON.stringify(result.url))
    }).catch((err)=>{
        console.log("error",JSON.stringify(err))
    })
}

const registerUser=(req, res) =>{
    const newUser = new User() 
    newUser.username=req.body.username 
    newUser.email=req.body.email 
    newUser.password=req.body.password 
    newUser.gender=req.body.gender 
    newUser.dateOfBirth=req.body.dateOfBirth 
    newUser.contactNo=req.body.contactNo 
    newUser.address=req.body.address 
    newUser.city=req.body.city 
    newUser.pincode=req.body.pincode 
    newUser.save(function(err, data) {
        if(err) {
            console.log(err) 
        }
        else {
            res.send("Data inserted") 
        }
    }) 
}

const updateUserProfile=(req,res)=>{
    User.findOneAndUpdate({_id:req.body._id},req.body,function(err,data){
        if(err){
            console.log("error"+err) 
        }
        else{
            res.send(req.body) 
        }
    }) 
}

const getUData=(req,res)=>{
    console.log(typeof(req.body)) 
    User.findOne({username: req.body.username},function(err,data){
        if(err){
            console.log("error"+err) 
        }
        else{

            if(data==null){
                console.log("No user found!") 
            }
            else{
                console.log("Logged in") 
                console.log(data) 
                res.send(data) 
                
            }
        }
    }) 
}

const deleteUser=(req, res)=>{

    User.findOneAndDelete({_id: req.body._id},function(err, data){
        if(err){
            console.log("error"+err) 
        }
        else{
            res.send("deleted") 
        }
    }) 
}


const googleLogin=async (req , res)=> {

    const google_auth=require('./google_Auth')
    var gUser=await google_auth.then(function (result) {
            console.log("Success")
            return result
    })
    User.findOne({email: gUser.mail.toLowerCase()},function(err,data){
        if(err){
            console.log("error"+err) 
        }
        else{

            if(data==null){
                var user=new User()
                user.email=gUser.mail.toLowerCase()
                user.username=gUser.name
                user.save(function(data,err){
                res.send("User registered")})
            }
            else{
                console.log("Logged in") 
                console.log(data) 
                res.send(data) 
            }
        }
    }) 
}
module.exports={getLogin,uploadProfilePhoto,registerUser,updateUserProfile,getUData,deleteUser,googleLogin}