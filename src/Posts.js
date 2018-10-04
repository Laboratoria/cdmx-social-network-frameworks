import React, { Component } from 'react'
import firebase from 'firebase';

class Posts extends Component{
    constructor() {
        super();
        this.state ={
              posts:[]
        }
    }

  componentDidMount =() =>{
    //   const { messages } = 
      const nameRef = firebase.database().ref('new')
      nameRef.on('child_added', snapshot =>{
          const post = [];
          snapshot.forEach(snap=>{
             const snapsh = snap.val()
             post.push(snapsh)
          })
        this.setState({
                posts: post
        })
        })
   
}

render(){
    return(
        <div>
            {this.state.posts[1]}
            {console.log(this.state.posts[1])}
            
        </div>
    )
}
}

export default Posts;