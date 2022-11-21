
const serviceModel = require('../Models/Service')
const cloudinary=require('../config')
const addService = async(req,res)=>{
    var serviceDetails = new serviceModel({
                            userID: req.body.userID,
                            serviceTitle: req.body.serviceTitle,
                            occupation: req.body.occupation,
                            serviceDescription: req.body.serviceDescription,
                            location: req.body.location,
                            tags: req.body.tags,
                        })
    
    if(req.body.serviceImage){
        serviceDetails.serviceImage=await cloudinary.uploader.upload(req.body.serviceImage,{
            resource_type:"image",
            "public_id":'Finalproject/Service/'+serviceDetails._id+'-'+req.body.serviceTitle
        }).then((result)=>{
            return result.url
        }).catch((err)=>{
            console.log("error",JSON.stringify(err))
        })
        }
        serviceDetails.save(function(err, data) {
            if(err) {
                console.log(err) 
            }
            else {
                res.send("Data inserted") 
                
            }
        }) 

}





module.exports = {addService,}