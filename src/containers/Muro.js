import React, { Component } from "react";
import { Button, Col, Grid, Row, Form, FormGroup, FormControl, 
ControlLabel, Checkbox } from 'react-bootstrap';
import "./Muro.css";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {message } = this.state;


    }




    render() {
        const { message } = this.state;
        return(
            <div>
                <Grid>
                    <Row id="contactForm">
                                <FormGroup>
                                    <Col componentClass={ControlLabel} bsSize="lg" sm={2}>
                                        Publica
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl required value={message} name="Publica" componentClass="textarea" style={{ height: 200 }} 
                                        type="Publicaciòn" placeholder="¡Còmo està tu mascota hoy?" onChange={this.onChange}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                  <Col smOffset={2} sm={10}>
                                    <Button type="submit">
                                     Publicar
                                    </Button>
                                  </Col>
                                </FormGroup>
                    </Row>
                </Grid>
            </div>
        )
    }
  }
  export default App;