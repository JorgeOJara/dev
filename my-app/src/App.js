import {useState} from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';
import './form.css';
// import './form.js';


function App() {
  // hook for singup/login
const [Changes,setChanges] =  useState("container")

function singUpButton(){setChanges("container right-panel-active")}
function singINButton(){setChanges("container")}


return (
    <div className="App">
      <form class="form">
  <div class="control">
    <h1>
      Sign In
    </h1>
  </div>
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
    <div class="text">
      Log In
    </div></button>
  <div class="credits">
    <a>
      My other codepens</a>
  </div></form>
   </div>
  );
}

export default App;
