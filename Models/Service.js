const mongoose=require("mongoose") 

const Service=new mongoose.Schema({
    userID:{type:String,required:true},
    occupation:{type:String},
    serviceTitle:{type:String,required:true},
    serviceDescription:{type:String},
    location:{type:String},
    serviceImage: {type:String},
    tags:{type:String}
})

module.exports=mongoose.model("Service",Service)