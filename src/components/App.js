import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import AI from "./AI";
import Details from "./Details";
import CompleteTrending from "./CompleteTrending";
import history from "../history";
import "../../src/App.css";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Navigation />
          <Switch>
            <Route path="/" exact component={AI} />
            <Route path="/anime/trending" exact component={CompleteTrending} />
            <Route path="/anime/detail/:id" exact component={Details} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
