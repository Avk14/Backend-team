const cloudinary = require('cloudinary').v2;
const serviceModel = require('../Models/Service')

const addService = async(req,res)=>{

    // var path = req.body.serviceImage
    // if(path==null){
    //     path = "C:\\Users\\Mansi\\OneDrive\\Desktop\\Anurag.jpg"
    // }

    var serviceDetails = new serviceModel({
                            userID: req.body.userID,
                            serviceTitle: req.body.serviceTitle,
                            occupation: req.body.occupation,
                            serviceDescription: req.body.serviceDescription,
                            location: req.body.location,
                            tags: req.body.tags
                            //serviceImage: path
                        })
    
                        if(req.body.serviceImage){
                            serviceDetails.serviceImage=await cloudinary.uploader.upload(req.body.serviceImage,{
                                resource_type:"image",
                                "public_id":'Finalproject/Service/'+req.body._id+'-'+req.body.serviceTitle
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

                        /*
    serviceDetails.save(function(err, data){
        if(err){
            console.log("error"+err)
        }
        else{

            cloudinary.uploader.upload(path,{
                resource_type:"image",
                "public_id":'WorkIT/'+userID+'/'+data._id
            })
            .then((result)=>{
                return result.url
            })
            .catch((err)=>{
                console.log("error",JSON.stringify(err))
            })
        }
    })
*/

}

module.exports = {addService}