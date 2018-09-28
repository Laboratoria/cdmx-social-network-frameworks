import React, { Component } from "react";
import GoogleButton from 'react-google-button'
import { Button, FormGroup, FormControl, ControlLabel,Form } from "react-bootstrap";
import './Login.css';
import { Redirect } from 'react-router'
import firebase from 'firebase';
//import { Redirect } from "react-router-dom";
//se importa un fichero svg como variable para poderlo implementar sin problemas de tipo de ruta
//crear un boton con un evento onClick que llama a la funcion de autenticaciòn google
//se importa firebase

    
class App extends Component {
constructor () {
  super();
  //definimos el estado de la app y el componente es un objeto que tiene propiedad
  //user y tiene valor nulo
  this.state = {
    email: "",
    password: "",
    user: null,  
    fireRedirect: false
  };
  this.handleAuth = this.handleAuth.bind(this);
this.handleLogout = this.handleLogout.bind(this);
}

onSubmit = (e) => {

  this.setState({ fireRedirect: true })
}
//metodo para acceder a hacer llamadas e integrar otras librerias  una vez que el componente ha sido renderizado
//validar que una vez que el usuario se loguea user deja de ser nulo
componentWillMount(){
firebase.auth().onAuthStateChanged(user =>{
  this.setState({user});
})
}
validateForm() {
  return this.state.email.length > 0 && this.state.password.length > 0;
}
handleChange = event => {
  this.setState({
    [event.target.id]: event.target.value
  });
}
handleSubmit = event => {
  event.preventDefault();
}
  //crear funcion antes del render para llamar a firebase(proveedor)  
handleAuth(){
const provider = new firebase.auth.GoogleAuthProvider();
//llamamos la funcion de firebase auth y le pasamos al proveedor
firebase.auth().signInWithPopup(provider)
.then(result => console.log(`${result.user.email}ha iniciado sesion`))
.catch(error =>console.log(`error ${error.code}: ${error.message}`));
}
//crear funcion para desloguearse
handleLogout(){
  firebase.auth().signOut()
.then(result => console.log(`${result.user.email}ha cerrado sesion`))
.catch(error =>console.log(`error ${error.code}: ${error.message}`));

}


//crear una funcion para manipular la data obtenida al loguearse
renderLoginButton () {
//validar que el usuario sea distinto de null
if(this.state.user){
  return(
    <Redirect to='/muro'/>
    //<div class = "container">
      //<img width = "100"src = {this.state.user.photoURL} alt = {this.state.user.displayName}/>
      //<p>Bienvenido{this.state.user.displayName}!</p>
     //<button onClick={this.handleLogout}>Salir</button>
    //</div>
     );
}else{
  return(
    <GoogleButton
  onClick={this.handleAuth}/>
  );
}
}


  render() {
    
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state;
    return (
      
      <div className="App">
        <div className="App-header">
          <h2 className="App-title">Inicia sesiòn</h2>
        </div>
       
        
        <Form horizontal onSubmit={this.onSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Entrar
          </Button>
          </Form>
          <div>
        {fireRedirect && (
          <Redirect to={from || '/muro'}/>
        )}
      </div>
      <form onSubmit={this.handleSubmit}>
      <p className="App-intro">
        {this.renderLoginButton()}
         </p>
        </form>
      </div>
    );
  }
}

export default App;
