import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux';


class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            love: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_empty.png",
            shuffle: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/shuffle_grey.png",
            play: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_grey.png",
            repeat: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/repeat_grey.png",
            volume: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/volume_grey.png"
        }

        this.love = this.love.bind(this);
        this.unlove = this.unlove.bind(this);
        this.shuffle = this.shuffle.bind(this);
        this.unshuffle = this.unshuffle.bind(this);

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.repeat = this.repeat.bind(this);
        this.unrepeat = this.unrepeat.bind(this);
        this.mute = this.mute.bind(this);
        this.unmute = this.unmute.bind(this);
    }

    love() {
        this.setState({
            love: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_filled.png"
        })
    }

    unlove() {
        this.setState({
            love: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_empty.png"
        })
    }

    shuffle() {
        this.setState({
            shuffle: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/shuffle_grey.png"
        })
    }
    
    unshuffle() {
        this.setState({
            shuffle: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/shuffle_green.png"
        })
    }
    
    play() {
        this.setState({
            play: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_grey.png"
        })
    }
    
    pause() {
        this.setState({
            play: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/pause_grey.png"
        })
    }
    
    repeat() {
        this.setState({
            repeat: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/repeat_grey.png"
        })
    }

    unrepeat() {
        this.setState({
            repeat: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/repeat_green.png"
        })
    }

    mute() {
        this.setState({
            volume: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/volume_grey.png"
        })
    }

    unmute() {
        this.setState({
            volume: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/volume_green.png"
        })
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
                    <img className="love" onClick={this.state.love === "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_empty.png" ? this.love : this.unlove} src={this.state.love} />
                </div>
                 <div className="center-play">
                    <img className="shuffle" onClick={this.state.shuffle === "https://dotify-app-dev.s3-us-west-1.amazonaws.com/shuffle_grey.png" ? this.unshuffle : this.shuffle} src={this.state.shuffle} />
                    <img className="prev" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/prev_grey.png"/>
                    <img className="play" onClick={this.state.play === "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_grey.png" ? this.pause : this.play} src={this.state.play}/>
                    <img className="next" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/next_grey.png"/>
                    <img className="repeat" onClick={this.state.repeat === "https://dotify-app-dev.s3-us-west-1.amazonaws.com/repeat_grey.png" ? this.unrepeat : this.repeat} src={this.state.repeat} />
                </div>
                <div className="right-play">
                    <img className="playlist" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/playlist-grey.png"/>
                    <img className="volume" onClick={this.state.volume === "https://dotify-app-dev.s3-us-west-1.amazonaws.com/volume_grey.png" ? this.unmute : this.mute} src={this.state.volume} />
                    <input type="range" id="volume" name="volume" min="0" max="1" step="0.01" className="progress-bar-input" value="0.5"></input>
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