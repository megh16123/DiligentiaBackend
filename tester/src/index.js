import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {initializeApp} from 'firebase/app'
// const firebaseApp=intitializeApp({
//   apiKey: "AIzaSyA7liX1Yuly3MAw5acXJ1ROu8qg4XOIEL4",
//   authDomain: "clone-92de0.firebaseapp.com",
//   projectId: "clone-92de0",
//   storageBucket: "clone-92de0.appspot.com",
//   messagingSenderId: "626751769100",
//   appId: "1:626751769100:web:12a1cd196524c4c90d3c29",
//   measurementId: "G-7ZR87GHV2E"
// })
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
