import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Chart from "./components/chartRatings";
import ModalTwo from "./components/modalTwo";
import Modal from "./components/modal";
import VideoPlayer from "./components/videoPlayer";
import VideoInfo from "./components/videoInformation";
import Footer from "./components/Footer";
///Import Components Here
import Header from "./components/Header";
import FilterHeader from "./components/filterHeader";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FilterHeader />
        <VideoPlayer />

        <Switch>
          <Route exact path='/' />
        </Switch>
        <Modal />
        <ModalTwo />
        <VideoInfo />
        <VideoPlayer />
        <Modal />
        <ModalTwo />
        <VideoInfo />
        <Footer />
      </div>
    );
  }
}
