import React, {Component} from 'react';
import firebase from 'firebase';
import { Input, Button } from 'react-materialize';

class NewPost extends Component {
    constructor() {
        super();
        this.state = {
         message:''
    }

    this.handleMessage = this.handleMessage.bind(this); // las funciones permanecen a ese componente App; es para que no pierda el scope
    this.sentMessage =this.sentMessage.bind(this);
}

  handleMessage (e){
    console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value});
    // console.log(e.target.name)
  }

  sentMessage (){
    firebase.database().ref('new').push();
    const newPost = firebase.database().ref('new').push();
    const key = newPost.getKey();
    firebase.database().ref(`new/${key}`).set({ 
        message: this.state.message,
        keyPost: key
        });
  }

  render() {
      return(
    <div>
      <Input placeholder="¿Qué tip saludable compartirás hoy?" onChange={this.handleMessage} name="message" />
      <Button className="button-pubish" onClick={this.sentMessage} >Publicar</Button>
    </div>
    )
  }
}
 export default NewPost;
