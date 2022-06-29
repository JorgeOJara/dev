import {useState} from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';

function App() {

  const [message, setMessage] = useState('');

  const handleChange = event => setMessage(event.target.value);

 function sendSomethingToServer(){
    axios.post('198.199.73.35:5000/addUser', {obj:message})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
        alert(message)
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
