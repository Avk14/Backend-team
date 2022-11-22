const mongoose=require("mongoose") 

const Post=new mongoose.Schema({
    UserID:{type:String,required:true},
    photo_link:{type:String},
    caption:{type:String}
    
}, { timestamps: true })

module.exports=mongoose.model("Post",Post) 