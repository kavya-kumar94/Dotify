import React from 'react';

class Player extends React.Component{
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
    }

    play() {
        const audio = document.getElementById("audio");
        audio.play();
    }
    // play(e) {
    //     let audio = new Audio(`${this.props.song.audio}`);
    //     audio.play();
    // }

    render() {
        return (
            <div className="player-div">
                    <div id="now-playing-bar">

                        {/* left side */}
                        <div className="now-playing-left">
                            <div className="thumb-image"></div>
                            <div className="np-container">
                                <a id="npt" href="">Track</a>
                                <div className="now-playing-text">
                                </div>
                                <a id="npa" href="">Artist Name</a>
                            </div>
                            <div className="love-container">
                                <button id="love-button">
                                    <img id="love" src="empty_heart.png" />
                                </button>
                            </div>
                        </div>
                        </div>

                <div className="now-playing-controls">
                    <div className="now-playing-buttons">

                        {/* shuffle button */}
                        <button id="np-button">
                            <img id="shuffle" src="shuffle_white.png" />
                        </button>

                        {/* back button */}
                        <button id="np-button">
                            <img id="direction" src="prev_white.png" />
                        </button>

                        {/* play button */}
                        <button onClick={this.play} id="np-button">
                            <img id="play" src="play_white.png" />
                        </button>

                        {/* next button */}
                        <button id="np-button">
                            <img id="direction" src="next_white.png" />
                        </button>

                        {/* repeat button */}
                        <button id="np-button">
                            <img id="repeat" src="repeat_white.png" />
                        </button>
                    </div>
                    {/* <audio id="audio"><source src="skylines.mp3" /></audio> */}
                </div>

                {/* TODO: Decide what's going on the right-hand side of the now-playing bar*/}
                <div className="now-playing-right">
                </div>
            </div>
            // </div >
                /* <div className="left-play">
                    <img className="love" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_empty.png"/>
                </div>
                <div className="center-play">
                    <img className="shuffle" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/shuffle_grey.png"/>
                    <img className="prev" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/prev_grey.png"/>
                    <img className="play" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_grey.png"/>
                    <img className="next" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/next_grey.png"/>
                    <img className="repeat" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/repeat_grey.png"/>
                </div>
                <div className="right-play">
                    <img className="playlist" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/playlist-grey.png"/>
                    <img className="volume" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/volume_grey.png"/>
                </div> */
            // </div>
        )
    }
}

export default Player;