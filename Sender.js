const axios  = require("axios")
let data;

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

