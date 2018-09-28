import React, { Component } from "react";
import { Button, Col, Grid, Row, Form, FormGroup, FormControl, 
ControlLabel } from 'react-bootstrap';
import { Redirect } from 'react-router'
import "./Registro.css";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            fireRedirect: false
        }
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, email } = this.state;
        this.setState({ fireRedirect: true })
    }

    render() {
        const { name, email} = this.state;
        const { from } = this.props.location.state || '/'
        const { fireRedirect } = this.state
        return(
            <div>
                <Grid>
                    <Row id="contactForm">
                        <Col xs={2}>
                        </Col>
                        <Col xs={8}>
                            <Form horizontal onSubmit={this.onSubmit}>
                                <FormGroup >
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Name
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl required value={name} name="name" type="name" 
                                    placeholder="Name" onChange={this.onChange} />
                                  </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl required value={email} name="email" type="email" 
                                    placeholder="Email" onChange={this.onChange}/>
                                  </Col>
                                </FormGroup>

                                <FormGroup>
                                  <Col smOffset={2} sm={10}>
                                    <Button type="submit">
                                      Send
                                    </Button>
                                  </Col>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col xs={2}>
                        </Col>
                        <div>
        {fireRedirect && (
          <Redirect to={from || '/muro'}/>
        )}
      </div>
                    </Row>
                </Grid>
            </div>
        )
    }
  }
  export default App;