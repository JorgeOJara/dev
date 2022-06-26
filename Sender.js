const axios  = require("axios")



axios.get("/")
.then((response)=>{
      console.log(response);
  })


axios.post('/addUser', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });