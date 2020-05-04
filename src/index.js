import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let name = "RS"
let faveNum = 108
let flowers =['roses','jasmine','daisy']
let wardrobe ={
  shirts: ['black','pink','orange'],
  pants: 'jeans',
  socks: ['black','white']
}

ReactDOM.render(
  <React.StrictMode>
    <App name={name} num={faveNum} flowers={flowers} wardrobe={wardrobe}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
