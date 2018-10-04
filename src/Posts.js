import React, { Component } from 'react'
import firebase from 'firebase';
import { Card, Button } from 'react-materialize'

class Posts extends Component{
    constructor(props) {
        console.log(props)
        super(props);
        this.state ={
              posts:[]
        }
    }

  componentDidMount() {
      firebase.database().ref('new').on('value', snapshot=>{
        const posts = []
          snapshot.forEach(shot=>{
              const snapshotVal = shot.val()
              posts.push(snapshotVal);
          })
          this.setState({
              posts
          })
      })
}

render(){
// console.log(this.state.posts)
    return(
            <div>
                {this.state.posts.map(post=>{
                    return(
                    <Card  className={post.keyPost}>
                    </Card>
                    {/* <div className="container post-cont">
                    <div>
                       <img className= "circle photoProfile" width = "100" src = {post.photoURL} alt = {post.displayName}/> 
                       <p className="userPost"> <strong>{post.UserEmail}</strong>:</p>
                       <p id={post.keyPost} className="textMessage"> ${post.message}</p>
                       <div className ="card-action ">
                       <Button type= "button" data-key={post.keyPost} className= "edit-message-btn"> Editar </Button>
                      <Button type="button"  data-key={post.keyPost} className="delete-message-btn"> Borrar </Button>
                      <p id ={post.keyPost} className="favorite-counter right"></p><i data-key={post.keyPost} className="small material-icons right favoriteCounter">favorite</i>
                    </div> */}
                    {/* <div className={post.keyPost}>
                    {post.message}
                    </div> */}
                )})}
            </div>
    )
  }
}


export default Posts;
