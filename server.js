// Express its to run the demon..
const express  = require("express");
const app =  express();
// use for letting a api do ap things
const cors = require('cors');

const axios = require("axios");

// lib to connect to a mongodb database
const { MongoClient }  = require("mongodb");
const { MongoClien }  = require("mongodb";

// const URL = "mongodb://172.17.0.2/16:2727";

// we create 'users' collection in newdb database
var url = "mongodb://172.17.0.2/16:27017/main";
 

// const client = new MongoClient(URL);
app.use(cors())
// re-format json data
app.use(express.json());

// default request
app.get("/",(request,response)=>{
	  response.send("Yeah Im here...")
	  console.log("Someone ask for something");
})

//post into database 
app.post("/addUser",(request,response)=>{
  // try connecting to database
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to new
    console.log("Switched to "+db.databaseName+" database");
     })  //close 
  axios.get(request.body.url)
  .then((res)=>{
       response.json(res.data)
  }).catch( (err)=> console.log(err))
})




// wait for a request
app.listen(8080,()=>{
	   console.log("Server its Running")
})

