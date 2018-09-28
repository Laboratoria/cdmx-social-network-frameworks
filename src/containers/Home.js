import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
        <img src={require('../images/logo.png')} />
         <h1>Petips</h1>
          <p>Red Social para mascotas</p>
        </div>
      </div>
    );
  }
}