import {useState} from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';

function App() {

  const [message, setMessage] = useState('');

  const handleChange = event => setMessage(event.target.value);

 function sendSomethingToServer(){
  axios.post('http://198.199.73.35/addUser', { url:message,})
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  })
   .catch(function (error) {console.log(error);});
}

   function SaySomethingToUser(){
      if(10 == 10){
        return <h1>Give me a API URL</h1>
      }else{
          return <h1>SAFE</h1>
      }
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
           <SaySomethingToUser/>
    <div>
      <input
        type="url"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />
      </div>
           <button onClick={sendSomethingToServer}>submit</button>
      </header>
    </div>
  );
}

export default App;
