import {useState} from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';
import './form.css';


function App() {

return (
  <div class="App">
  <form class="form">
  <div class="control"><h1>Sign In.</h1></div>
  <div class="control block-cube block-input">
    <input></input><div class="bg-top">
      <div class="bg-inner"></div>
    </div>
    <div class="bg-right">
      <div class="bg-inner"></div>
    </div>
    <div class="bg">
      <div class="bg-inner"></div>
    </div>
  </div>
  <div class="control block-cube block-input">
    <input ></input>
      <div class="bg-top">
      <div class="bg-inner"></div>
    </div>
    <div class="bg-right">
      <div class="bg-inner"></div>
    </div>
    <div class="bg">
      <div class="bg-inner"></div>
    </div>
  </div>
  <button class="btn block-cube block-cube-hover">
    <div class="bg-top">
      <div class="bg-inner"></div>
    </div>
    <div class="bg-right">
      <div class="bg-inner"></div>
    </div>
    <div class="bg">
      <div class="bg-inner"></div>
    </div>
    <div class="text">Log In</div></button>
     <div class="credits"></div></form>
     <a>Debiano</a>
   </div>
  );
}

export default App;
