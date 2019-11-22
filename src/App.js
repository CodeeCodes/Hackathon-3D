import React, { Component } from "react";
import { Switch, Route } from "react-router";

///Import Components Here
import Header from "./components/header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' />
        </Switch>
      </div>
    );
  }
}
