const Post = require('../Models/Post')
const cloudinary=require('../config')
const addPost = async(req,res)=>{
    var post_details = new Post({
                            UserID: req.body.UserID,
                            caption:req.body.caption
                        })
    
    if(req.body.photo_link){
        post_details.photo_link=await cloudinary.uploader.upload(req.body.photo_link,{
            resource_type:"image",
            "public_id":'WorkIT/Post/'+post_details._id+'-'+req.body.UserID
        }).then((result)=>{
            return result.url
        }).catch((err)=>{
            console.log("error",JSON.stringify(err))
        })
        }
        post_details.save(function(err, data) {
            if(err) {
                console.log(err) 
            }
            else {
                res.send("Data inserted") 
                
            }
        }) 

}


const get_Post=(req,res)=>{
    Post.find({},(err,data)=>{
        if(err)
        {
            res.send(err)
        }
        else
        {
            res.send(data)
        }
    })
}


module.exports = {addPost,get_Post}