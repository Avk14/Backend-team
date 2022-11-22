
const mongoose=require("mongoose") 
const cloudinary=require("cloudinary").v2
cloudinary.config({ 
    cloud_name: 'dgbiijd1t',
    api_key: '154586149989115',
    api_secret: 'oLNdRFnnkeODnW2MuWNw8Jdx4wc' 
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