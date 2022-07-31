import {useState} from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';

function App() {

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
   function makeAnewbutton(){
       alert('clicked')
   }

   function SaySomethingToUser(){
       if(foundSomething ==  false){
         return <h1>MakeYourOWnAPIS</h1>

      }else{
          return <h1>{finalDisplayedContentTorSafe.map((d)=>{return d.name})}</h1>
      }
   }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
           <SaySomethingToUser/>
    <div>
      <h2>URL</h2>
      <input
        type="text"
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
