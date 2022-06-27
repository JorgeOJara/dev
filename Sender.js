const axios  = require("axios")



axios.get("/")
.then((response)=>{
      console.log(response);
  })


axios.post('/addUser', {
    obj: axios.get("https://jsonplaceholder.typicode.com/users")
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });