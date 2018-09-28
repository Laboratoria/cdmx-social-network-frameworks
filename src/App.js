import { LinkContainer } from "react-router-bootstrap";
import React, { Component } from "react";
import Routes from "./Routes";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";


class App extends Component {
  render() {
     return (
        <div className="App">
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Petips</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to="/registro">
                  <NavItem>Registrarme</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Entrar</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes />
        </div> 
      );
  }
}

export default App;