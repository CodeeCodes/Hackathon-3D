import React, { Component } from "react";
import Poster from "../assets/TED_placeholder.jpg";
export default class videoPlayer extends Component {
  render() {
    return (
      <div className='videoPlayer'>
        <figure className='videoPlayer__wrapper'>
          <video className='videoPlayer__player' poster={Poster} controls>
            <source></source>
          </video>
        </figure>
      </div>
    );
  }
}
