import React, { Component } from 'react'

export default class videoPlayer extends Component {
    render() {
        return (
            <div className="videoPlayer">
                <figure className="videoPlayer__wrapper">
                    <video className="videoPlayer__player" controls> 
                        <source></source>
                    </video>
                    <div className="videoPlayer__underBar">
                        <div className="videoPlayer__info">
                            <span>Duration |</span>
                            <span> Date |</span>
                            <span> Location</span>
                        </div>
                        <div className="videoPlayer__btnWrapper">
                            <button className="videoPlayer__ratings">RATINGS</button>
                        </div>
                        
                    </div>
                </figure>
            </div>
        )
    }
}
