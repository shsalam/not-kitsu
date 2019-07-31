import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import { Main, Details, CompleteTrending } from "containers/index.js";
import Navigation from "components/Navigation";

import history from "helpers/history";
import "App.css";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/anime/trending" component={CompleteTrending} />
          <Route exact path="/anime/detail/:id" component={Details} />
        </Switch>
      </Router>
    );
  }
}
