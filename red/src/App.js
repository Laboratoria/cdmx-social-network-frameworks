import React, { Component } from 'react';
import './App.css';
//se importa un fichero svg como variable para poderlo implementar sin problemas de tipo de ruta
//crear un boton con un evento onClick que llama a la funcion de autenticaciòn google
//se importa firebase
import firebase from 'firebase';        
class App extends Component {
  //constructor trae las clases
constructor () {
  //llamar a super si se heredan las clases, super llamar al constructor de componer
  super();
  //definimos el estado de la app y el componente es un objeto que tiene propiedad
  //user y tiene valor nulo
  this.state = {
    user: null
  };
  this.handleAuth = this.handleAuth.bind(this);
this.handleLogout = this.handleLogout.bind(this);
}

//metodo para acceder a hacer llamadas e integrar otras librerias  una vez que el componente ha sido renderizado
//validar que una vez que el usuario se loguea user deja de ser nulo
componentWillMount(){
firebase.auth().onAuthStateChanged(user =>{
  this.setState({user});
})
}
  //crear funcion antes del render para llamar a firebase(proveedor)  
handleAuth(){
const provider = new firebase.auth.GoogleAuthProvider();
//llamamos la funcion de firebase auth y le pasamos al proveedor
firebase.auth().signInWhitPopup(provider)
.then(result => console.log(`${result.user.email}ha iniciado sesion`))
.catch(error =>console.log(`error ${error.code}: ${error.message}`));
}
//crear funcion para desloguearse
handleLogout(){
  firebase.auth().signOut()
.then(result => console.log(`${result.user.email}ha cerrado sesion`))
.catch(error =>console.log(`Èrror ${error.code}: ${error.message}`));

}


//crear una funcion para manipular la data obtenida al loguearse
renderLoginButton () {
//validar que el usuario sea distinto de null
if(this.state.user){
  return(
    <div>
      <img src = {this.state.user.photoURL} alt = {this.state.user.displayName}/>
      <p>Hola{this.state.user.displayName}!</p>
      <button onClick={this.handle}></button>
    </div>
  );
}else{
  return(
<button onClick={this.handleLogout}>Salir</button>
  );
}
}


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-title">Red Social</h2>
        </div>
        <p className="App-intro">
        {this.renderLoginButton()}
         </p>
      </div>
    );
  }
}

export default App;
