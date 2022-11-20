const url ="mongodb+srv://Anurag:anurag@cluster0.1tqbyou.mongodb.net/firstdb";






















const express =require('express');
const path=require('path');
const app=express();



const  MongoClient  = require("mongodb").MongoClient;




app.use('/',express.static(path.join(__dirname,'static')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/Login.html'));
});

app.post('/a',function(req,res){
    res.json(req.body);
    console.log("post");
    console.log(req.body);
    // res.json({status:"ok"});
});

app.post('/insert',function(req,res){
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("firstdb");
    var myobj = req.body;
    dbo.collection("firstcollect").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
});


app.post('/find',function(req,res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("firstdb");
        dbo.collection("firstcollect").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(JSON.stringify(result));
          db.close();
        });
      });
});

app.listen(9999);