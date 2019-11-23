import React, { Component } from "react";
import AvatarOne from "../assets/avatar_one.png";
import AvatarTwo from "../assets/avatar_two.png";

export default class videoInformation extends Component {
  render() {
    return (
      <>
        <div className='videoInfo'>
          <div className='videoInfo__wrapper'>
            <div className='videoInfo__text'>
              <h3 className='videoInfo__presenter'>Elon Musk</h3>
              <h3 className='videoInfo__title'>
                Elon Musk: The future we're building -- and boring
              </h3>
            </div>
            <div className='videoInfo__tools'>
              <button className='videoInfo__bookmark'>
                <img src={AvatarOne} alt='Bookmark Icon' />
              </button>
              <button className='videoInfo__share'>
                <img src={AvatarTwo} alt='Share Icon' />
              </button>
            </div>
          </div>
        </div>

        <div className='videoComments'>
          <div className='videoComments__wrapper'>
            <div className='videoComments__header'>
              <span className='videoComments__head'>Comments</span>
              <span>
                <button className='videoComments__viewAll'>View all</button>
              </span>
            </div>
            <div className='videoComments__comment'>
              <img
                className='videoComments__avatar'
                src={AvatarOne}
                alt='An avocado!'
              />
              <span className='videoComments__text'>Elon who???</span>
            </div>
            <div className='videoComments__comment'>
              <img
                className='videoComments__avatar'
                src={AvatarTwo}
                alt='Another avocado!'
              />
              <span className='videoComments__text'>
                Forget Elon, 8-Bit Avocados are the best!!!
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
