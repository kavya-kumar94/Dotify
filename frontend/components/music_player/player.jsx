import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faPlay, faStepForward, faStepBackward, faVolumeMute, faVolumeUp, faPause } from '@fortawesome/free-solid-svg-icons'
import { receiveCurrentSongId, clearCurrentSong } from '../../actions/player_actions';
import { fetchSongs } from '../../actions/song_actions';
class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            love: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_empty.png",
            shuffle: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/shuffle_grey.png",
            play: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_grey.png",
            repeat: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/repeat_grey.png",
            volume_icon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/volume_grey.png",
            playing: false,
            time: "",
            volume: 100,
            previousVolume: 0,
            duration: "",
            timeDuration: "",
            timePosition: "",
            currentSong: 0,
            presentSong: this.props.presentSong,
            change: false,
            duration: "",
        }


        this.setVolume = this.setVolume.bind(this);
        this.setTime = this.setTime.bind(this);
        this.song = this.song.bind(this);
        this.nextSong = this.nextSong.bind(this);
        this.sound = React.createRef();
        this.setState = this.setState.bind(this);
        this.changeSong = this.changeSong.bind(this);
        this.previousSong = this.previousSong.bind(this);
        this.nextSong = this.nextSong.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.songTime = this.songTime.bind(this);
    }

    componentDidMount() {
        this.props.fetchSongs();
        let audio = document.querySelector('#audio');
        if (audio) {
            setInterval(() => this.setState({
                duration: audio.duration,
                time: this.songTime(audio.currentTime),
                timeDuration: `${Math.floor(audio.duration / 60)}:${Math.floor(audio.duration % 60)}`,
                timePosition: `${audio.currentTime}`,
            }), 0)

            this.setState({ presentSong: this.props.presentSong })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.presentSong !== prevProps.presentSong) {
            let song = this.props.presentSong
            this.setState({ presentSong: song })
            this.song();
        }

        if (this.state.change) {
            this.song();
            this.changeSong();
            this.setState({ change: false })
        }

    }

    changeSong() {
        this.setState({ presentSong: this.props.songs[this.state.currentSong] })
    }

    song() {
        let audio = document.getElementById('audio');
        debugger;
        if (this.state.playing === false) {
            audio.play();
            this.setState({
                playing: true, play: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/pause_grey.png"})
        } else if (this.state.playing === true) {
            audio.pause();
            this.setState({ playing: false, play: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_grey.png"})
        }
    }

    previousSong() {
        if (this.state.playing === true) {
            this.setState({ currentSong: this.state.currentSong === 0 ? this.props.songs.length - 1 : (this.state.currentSong - 1) % this.props.songs.length, playing: false, change: true });
        } else {
            this.setState({ currentSong: this.state.currentSong === 0 ? this.props.songs.length - 1 : (this.state.currentSong - 1) % this.props.songs.length });
        }
    }


    nextSong() {
        if (this.state.playing === true) {
            this.setState({ currentSong: (this.state.currentSong + 1) % this.props.songs.length, playing: false, change: true });
        } else {
            this.setState({ currentSong: (this.state.currentSong + 1) % this.props.songs.length });
        }
    }


    handleClick() {
        this.changeSong();
        this.song();
    }

    setVolume(vol) {
        // this.sound.volume = (vol/100);
        this.state.volume = (vol / 100);
        this.setState({ volume: vol });
    }

    songTime(time) {
        let rounded = Math.floor(time);
        let minutes = Math.floor(rounded / 60);
        let seconds = Math.floor(rounded % 60);
        seconds >= 10 ? seconds = seconds : seconds = `0${seconds}`;
        return `${minutes}:${seconds}`;
    }

    toggleMute() {
        if (this.state.volume > 0) {
            this.setState({ previousVolume: this.state.volume , volume: 0
             })
            // this.state.volume = 0
        } else {
            this.setState({ volume: this.state.previousVolume  })
            // this.state.volume = this.state.previousVolume
        }
    }


    setTime(position) {
        this.state.currentTime = position;
        this.setState({ time: position })
    }

    
    render() {
        let { presentSong } = this.props;
        return (
            <div className="player-div">
                <audio id="audio" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/Michael%2BJackson%2B-%2BI%2BJust%2BCan't%2BStop%2BLoving%2BYou%2B(Clean).mp3"></audio>
                {/* <div className="track">
                </div> */}
                <div className="left-play">
                    <img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/majid3.jpeg" id="track_img"/>
                    <div className="texts">
                        {/* <p className="soname">{presentSong.title}</p> */}
                        <p className="soname">Song Title</p>
                        <p className="arname">Artist Name</p>
                    </div>
                    <img className="love" onClick={this.state.love === "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_empty.png" ? this.love : this.unlove} src={this.state.love} />
                </div>
                 <div className="center-play">
                     <div className="icons-playbar">
                        <img className="shuffle" onClick={this.state.shuffle === "https://dotify-app-dev.s3-us-west-1.amazonaws.com/shuffle_grey.png" ? this.unshuffle : this.shuffle} src={this.state.shuffle} />
                        <img className="prev" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/prev_grey.png"/>
                        <img className="play" onClick={() => this.song()} src={this.state.play}/>
                        <img className="next" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/next_grey.png"/>
                        <img className="repeat" onClick={this.state.repeat === "https://dotify-app-dev.s3-us-west-1.amazonaws.com/repeat_grey.png" ? this.unrepeat : this.repeat} src={this.state.repeat} />
                     </div>

                     <div className="duration-bar">
                         <li>0:00</li>
                        <input type="range" id="duration-bar" min="0" max="99" step="1" value="50"/>
                        <li>0:00</li>
                     </div>
                </div>
                <div className="right-play">
                    <img className="playlist" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/playlist-grey.png"/>
                    {this.state.volume > 0 ? <i ref={this.sound} onClick={() => this.toggleMute()} className="fas fa-volume-up"></i> : <i ref={this.sound} onClick={() => this.toggleMute()} className="fas fa-volume-mute"></i>}
                    <input ref={this.sound} type="range" id="volume" name="volume" min="0" max="99" step="1" className="progress-bar-input" value={this.state.volume} onChange={(e) => this.setVolume(e.currentTarget.value)} />
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


    const msp = (state, props) => {
        let songs = Object.values(state.entities.songs);
        return {
            songs,
            presentSong: state.ui.currentSongId,
        }
    }

    const mdp = dispatch => {
        return {
        receiveCurrentSongId: (song) => dispatch(receiveCurrentSongId(song)),
        clearCurrentSong: () => dispatch(clearCurrentSong()),
        fetchSongs: () => dispatch(fetchSongs()),
        }
    };

export default connect(msp, mdp)(Player);