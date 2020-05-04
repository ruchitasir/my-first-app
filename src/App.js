import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      <p>          
         This is my new text
       </p>
       <p> Name: {props.name} </p>
       <p>Favorite number: {props.num}</p>
      <p>{props.name} likes {props.flowers[0]},  {props.flowers[1]} and {props.flowers[2]}</p>
      <p>{props.name} is wearing {props.wardrobe.pants} and {props.wardrobe.shirts[0]} shirt</p>
    </div>
  );
}

export default App;
