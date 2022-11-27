const cloudinary=require('../config')
const Job=require("../Models/Job") 
const create_Job=async (req,res)=>{
    const new_Job=new Job({
        UserID:req.body.UserID,
        title:req.body.title,
        tags:req.body.tags,
        Job_Description:req.body.Job_Description,
        location:req.body.location,
        budget:req.body.budget,
        status:req.body.status
    })

    if(req.body.photo_link){
    new_Job.photo_link=await cloudinary.uploader.upload(req.body.photo_link,{
        resource_type:"image",
        "public_id":'WorkIT/Job/'+new_Job._id+'-'+req.body.title
    }).then((result)=>{
        return result.url
    }).catch((err)=>{
        console.log("error",JSON.stringify(err))
    })
    }
    new_Job.save(function(err, data) {
        if(err) {
            console.log(err) 
        }
        else {
            res.send("Data inserted") 
            
        }
    }) 
}

const delete_Job=(req,res)=>{
    Job.findOneAndDelete({_id:req.body._id},(err,data)=>{
        if(err)
        {
            res.send(err)
        }
        else
        {
            res.send("Job deleted ")
        }
    })
}

const get_Job=(req,res)=>{
    Job.find({},(err,data)=>{
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



module.exports={create_Job,delete_Job,get_Job}