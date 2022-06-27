const axios  = require("axios")
let data = null;

function Getmydata(){

     axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{data = response.body})
     .catch((err)=>{console.log(err)})
}
// get data you wanna insert
Getmydata();


axios.get("/")
.then((response)=>{
      console.log(response);
  })


axios.post('/addUser', {
    obj:data
  })

  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });