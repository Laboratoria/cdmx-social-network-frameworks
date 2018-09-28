import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from "firebase";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

firebase.initializeApp({
  apiKey: "AIzaSyC1aC1y5qGylAeEJK1qQD1Foi8pTbv3JVI",
  authDomain: "red-social-cd021.firebaseapp.com",
  databaseURL: "https://red-social-cd021.firebaseio.com",
  projectId: "red-social-cd021",
  storageBucket: "red-social-cd021.appspot.com",
  messagingSenderId: "83422122171"
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();