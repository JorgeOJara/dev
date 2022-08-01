// we create 'users' collection in newdb database
var url = "mongodb://localhost:27017/newdb";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
    console.log("Switched to "+db.databaseName+" database");
 
    // document to be inserted
    var doc = { name: "Roshan", age: "22" };
     
    // insert document to 'users' collection using insertOne
    db.collection("users").insertOne(doc, function(err, res) {
        if (err) throw err;
        console.log("Document inserted");
        // close the connection to db when you are done with it
        db.close();
    });
});


  const [message, setMessage] = useState('');
  const [finalDisplayedContentTorSafe, setFinaldisplayedContentToSafe] = useState('');

  const [foundSomething,setIfFound] = useState(false)
  const handleChange = event => setMessage(event.target.value);




async function sendSomethingToServer(){
  axios.post('http://198.199.73.35/addUser',{url:message})
  .then((response) => {
        if(response.status == 200)
        {
          setFinaldisplayedContentToSafe(response.data);
          console.log(response.data);
          setIfFound(true);
        }else{alert("something wrong with the url ... please Make sure you have the right endpoint")}
  })
   .catch(function (error){console.log(error);});
}