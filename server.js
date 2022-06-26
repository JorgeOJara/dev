const express  = require("express");

const app =  express();



app.get("/",(request,response)=>{
	  response.send("Yeah Im here...")
	  console.log("Someone ask for something");
})





app.listen(7070,()=>{
	   console.log("Server its Running")
})