import React, { Component } from 'react';
import firebase from 'firebase';
import { Input, Button } from 'react-materialize';
// import Posts from 'Posts'

class NewPost extends Component {
    constructor() {
        super();
        this.state = {
         message:''
    }
}

  handleMessage = (e) =>{
    // console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value});
    // console.log(e.target.name)
  }

  sentMessage = () =>{
    firebase.database().ref('new').push();
    const newPost = firebase.database().ref('new').push();
    const key = newPost.getKey();
    firebase.database().ref(`new/${key}`).set({ 
        message: this.state.messageInput,
        keyPost: key
        })
          this.setState({messageInput: ''})        
  }

//   printPost = () => {
//     firebase.database().ref('new')
//       .on('child_added', (message) => {
//         return(
// <Card className='small card-container'>
//    <Icon> favorite</Icon>
//    <Button type= "button" className= "edit-message-btn waves-effect waves-light btn">Editar</Button>
//   <Button type="button" className="delete-message-btn delete waves-effect waves-light btn">Borrar</Button> 
//          <Row>
//          </Row> 
//          </Card>
//         )
//         }) 
      
//       }

  render() {
      return(
    <div>
      <Input  name="messageInput" placeholder="¿Qué tip saludable compartirás hoy?" onChange={this.handleMessage} />
      <Button className="button-pubish" onClick={this.sentMessage} >Publicar</Button>
      {/* <Posts /> */}
    </div>
    )
  }
}
 export default NewPost;
