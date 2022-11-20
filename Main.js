const express=require('express') 
const app = express() 
const bodyparser=require('body-parser') 
const index=require('./Routers/index')
app.listen(14300,function(err,data){
    console.log("main") 
}) 

//app.get("/main") 
app.use(bodyparser.urlencoded({extended:true})) 
app.use(bodyparser.json()) 
app.use("/index",index) 
