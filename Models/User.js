const mongoose=require("mongoose") 

const User  = new mongoose.Schema({
    username: {type: String, unique: true},
    email: {type:String, required: true, unique:true},
    password: {type: String},
    gender: {type: String, max:1},
    dateOfBirth: {type: String},
    contactNo: {type: Number, length: 10},
    address: {type: String},
    city: {type: String},
    pincode: {type: Number, length:6},
    profile_pic:{type: String}
}, { timestamps: true }) 
module.exports=mongoose.model("User",User) 