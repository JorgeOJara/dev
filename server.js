// Express its to run the demon..
const express  = require("express");
const app =  express();

// lib to connect to a mongodb database
const mongoose = require('mongoose');

// re-format json data
app.use(express.json());

// default request
app.get("/",(request,response)=>{
	  response.send("Yeah Im here...")
	  console.log("Someone ask for something");
})

//post into database 
app.post("/addUser",(request,response)=>{
	console.log(request.body)
	response.send("thanks for the info")
})


// wait for a request
app.listen(80,()=>{
	   console.log("Server its Running")
})