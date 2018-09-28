import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Registro from "./containers/Registro";
import Login from "./containers/Login";
import Muro from "./containers/Muro";


export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/registro" exact component={Registro} />
    <Route path="/login" exact component={Login} />
    <Route path="/muro" exact component={Muro} />
  </Switch>;