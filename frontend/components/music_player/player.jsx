import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux';


class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            volumeStatus: "unmute",
            volume: 0.5,
            prevVolume: 0.5,
        }
        this.setVolume = this.setVolume.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    render() {
        return (
            <div className="player-div">

                {/* <div className="track">
                </div> */}
                <div className="left-play">
                    <img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/majid3.jpeg" id="track_img"/>
                    <div className="texts">
                        <p className="soname">Song Title</p>
                        <p className="arname">Artist Name</p>
                    </div>
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
                    <input type="range" id="volume" name="volume" min="0" max="1" step="0.01" class="progress-bar-input" value="0.5"></input>
                </div>  
                {/* < ReactAudioPlayer className="aud"
                    src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/03.%2BSICKO%2BMODE.mp3"
                    autoPlay
                    controls
                /> */}
            </div>
        )
    }
}

        // const msp = (state) => {
        //     let playlist = null;
        //     let currentSong = state.nowPlaying.currentSong;
        //     let currentArtist = null;
        //     let currentAlbum = null;
        //     if (currentSong) {
        //         currentArtist = state.entities.artists[currentSong.artist_id];
        //         currentAlbum = state.entities.albums[currentSong.album_id];
        //     }

        //     return {
        //         currentSong,
        //         currentArtist,
        //         currentAlbum,
        //         queue: state.nowPlaying.queue,
        //         playStatus: state.nowPlaying.playStatus,
        //     }
        // };


        // const mdp = (dispatch) => ({
            
        //     playCurrentSong: songId => dispatch(playCurrentSong(songId)),
        //     updatePlayStatus: status => dispatch(updatePlayStatus(status))

        // })


export default Player;