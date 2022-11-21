
const mongoose=require("mongoose") 
const cloudinary=require("cloudinary").v2
cloudinary.config({ 
    cloud_name: 'di91necvb',
    api_key: '661133491932653',
    api_secret: '0aeiIaRqJdfxZn-suqcprDQc89M' 
})
require('dotenv').config()



const url =process.env.Mongo_url
const db = (url) 
mongoose.Promise = global.Promise 
mongoose.connect(db, { useNewUrlParser : true, 

    useUnifiedTopology: true }, function(error) {
    
        if (error) {
    
            console.log("Error!" + error) 
    
        }
}) 
module.exports=cloudinary