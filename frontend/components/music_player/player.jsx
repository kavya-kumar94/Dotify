import React from 'react';

class Player extends React.Component{
    constructor(props) {
        super(props);
    }

    // play(e) {
    //     let audio = new Audio(`${this.props.song.audio}`);
    //     audio.play();
    // }

    render() {
        return (
            <div className="player-div">
                <div className="left-play">
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
                </div>
            </div>
        )
    }
}

export default Player;