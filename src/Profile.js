import React from 'react';

// elementos de materialize
import { Button, Row } from 'react-materialize';

const profile = ({logOutFunction, user}) => {
    // console.log(user);
    return ( 
    <div>
        <img className= "circle photoProfile" width = "100" src = {user.photoURL} alt = {user.displayName}/> 
        <p className="user-name"> {user.displayName} </p> 
        <p className="user-email"> {user.email} </p> 
        <Row>
         <Button className="button-cerrar" onClick = {logOutFunction}> Cerrar sesión </Button> 
        </Row>

    </div>
    )
}

export default profile;