// Express its to run the demon..
const express  = require("express");
const app =  express();

// lib to connect to a mongodb database
const { MongoClient }  = require("mongodb");

// the addres its in the server
//  you should inspect network bridge to
// find the mongodb container
const URL = "mongodb://172.17.0.6/16:2727";
// const client = new MongoClient(URL);

// re-format json data
app.use(express.json());

// default request
app.get("/",(request,response)=>{
	  response.send("Yeah Im here...")
	  console.log("Someone ask for something");
})

//post into database 
app.post("198.199.73.35/addUser:5000",(request,response)=>{
	console.log("something its here....")
    MongoClient.connect(URL, function(err, db) {
  if (err) throw err;
  var dbo = db.db("main");
  let commingFromclient =  request.body.obj
  dbo.collection("users").insertMany(commingFromclient, function(err, res) {
    if (err) throw err;
       console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
    });
  });
})


// wait for a request
app.listen(5000,()=>{
	   console.log("Server its Running")
})