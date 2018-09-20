
import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);
  }

  componentWillMount () {
  firebase.auth().onAuthStateChanged(user =>{
  // modifica el estado
    this.setState({ user });
   })
  }
  
  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log (`Error ${error.code}: ${error.message}`))
  }

  handleLogout ( ){
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log (`Error ${error.code}: ${error.message}`))
  }

renderLoginButton () {
// si el usuario está logueado haga algo
if (this.state.user){
  return (
    <div>
     <img width ="100" src= {this.state.user.photoURL} alt= {this.state.user.displayName} />
     <p>Hola {this.state.user.displayName}!</p>
     <button onClick= {this.handleLogout}>Salir</button>
    </div>
  );
}else{
  return(
  <button className="Google-button" onClick={this.handleAuth}>Login con Google</button>
)
// si no está, que haga otra cosa
     }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Greener</h1>
        </header>
        <p className="App-intro">
        { this.renderLoginButton() }
        </p>
      </div>
    );
  }
 } 

export default App;
