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
	console.log("something its here....")
  console.log(request.body)
  reponse.send("done")
})


// wait for a request
app.listen(80,()=>{
	   console.log("Server its Running")
})