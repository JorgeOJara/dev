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


const dbName = "COLLECTED";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}
main()
  .then((response)=>{console.log("finally work...")})
  .catch((err)=>{console.log(err)})
  .finally(() => client.close());

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
app.listen(5000,()=>{
	   console.log("Server its Running")
})