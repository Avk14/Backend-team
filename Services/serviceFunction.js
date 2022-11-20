const cloudinary = require('cloudinary').v2
cloudinary.config({ 
    cloud_name: 'di91necvb',
    api_key: '661133491932653',
    api_secret: '0aeiIaRqJdfxZn-suqcprDQc89M' 
})
require('dotenv').config
const serviceModel = require('../Models/Service')

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