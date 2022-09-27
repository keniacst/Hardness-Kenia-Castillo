import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-EirHXX9pAq8lXxgzIFrWgosihZHFeK4",
  authDomain: "hardness-4b365.firebaseapp.com",
  projectId: "hardness-4b365",
  storageBucket: "hardness-4b365.appspot.com",
  messagingSenderId: "655808433190",
  appId: "1:655808433190:web:d1ebd1e7c5d5f163e4eae7"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Background color
document.body.style = 'background:  #f7faff;';