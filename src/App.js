import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Chart from "./components/chartRatings";
import Modal from "./components/modal";
import VideoPlayer from "./components/videoPlayer";
///Import Components Here
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <VideoPlayer />
        <Switch>
          <Route exact path='/' />
        </Switch>
        <Modal />
      </div>
    );
  }
}
