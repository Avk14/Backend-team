const Post = require('../Models/Post')
const cloudinary=require('../config')
const addPost = async(req,res)=>{
    var post_details = new Post({
                            userID: req.body.userID,
                            caption:req.body.caption
                        })
    
    if(req.body.photo_link){
        post_details.photo_link=await cloudinary.uploader.upload(req.body.photo_link,{
            resource_type:"image",
            "public_id":'WorkIT/Post/'+post_details._id+'-'+req.body.userID
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





module.exports = {addPost,}