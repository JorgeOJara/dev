// Express its to run the demon..
const express  = require("express");
const app =  express();

// lib to connect to a mongodb database
const { MongoClient }  = require("mongodb");


// the addres its in the server
//  you should inspect network bridge to
// find the mongodb container
const URL = "mongodb://172.17.0.6/16:2727";
const client = new MongoClient(URL);


// re-format json data
app.use(express.json());




// default request
app.get("/",(request,response)=>{
	  response.send("Yeah Im here...")
	  console.log("Someone ask for something");
})

//post into database 
app.post("/addUser",(request,response)=>{
 const dbName = "Collected";
 async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);


  return db;
}
main()
  .then((res)=>{ 
  	   res.collection("customers").insertMany(request.body.obj);
       console.log('Inserted documents =>', insertResult)
   })
  .catch((err)=>{console.log(err)})
  .finally(() => client.close());


})


// wait for a request
app.listen(5000,()=>{
	   console.log("Server its Running")
})