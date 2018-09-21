import React from 'react';
import ReactDOM from 'react-dom';
//importar firebase
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//antes de renderizar llamamos la configuracion de firebase
firebase.initializeApp({
    apiKey: "AIzaSyC1aC1y5qGylAeEJK1qQD1Foi8pTbv3JVI",
    authDomain: "red-social-cd021.firebaseapp.com",
    databaseURL: "https://red-social-cd021.firebaseio.com",
    projectId: "red-social-cd021",
    storageBucket: "red-social-cd021.appspot.com",
    messagingSenderId: "83422122171"
})
//React llama metodo render para indicar que componente queremos renderizar
//y en que parte del html lo pondremos, mediante el metodo getElementById 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
