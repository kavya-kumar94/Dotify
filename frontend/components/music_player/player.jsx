import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faPlay, faStepForward, faStepBackward, faVolumeMute, faVolumeUp, faPause } from '@fortawesome/free-solid-svg-icons'
import { setCurrentSong, setQueue, toggleSong, addToQueue } from '../../actions/player_actions';
import { receiveCurrentSongId, clearCurrentSong, playCurrentSong } from '../../actions/player_actions';
import { fetchSong } from '../../actions/song_actions';
class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            love: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_empty.png",
            shuffle: false,
            play: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_circle_white.png",
            repeat: false,
            volume_icon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/volume_grey.png",
            playing: false,
            time: "",
            volume: 100,
            previousVolume: 0,
            duration: "",
            timeDuration: "",
            timePosition: "",
            currentTime: "",
            currentSong: 0,
            presentSong: this.props.presentSong,
            change: false,
            duration: "",
            songs: this.props.songs,
            active: this.props.presentSong
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
        this.handlePlay = this.handlePlay.bind(this);
        this.repeat = this.repeat.bind(this);
        this.shuffle = this.shuffle.bind(this);
    }

    componentDidMount() {
        // this.props.receiveCurrentSongId(this.props.presentSong);
        let audio = document.querySelector('#audio');

        // let min = Math.floor(audio.currentTime / 60) === 0 ? "0" : `${Math.floor(audio.currentTime / 60)}`;
        // let sec = Math.floor(audio.currentTime % 60) < 10 ? `0${Math.floor(audio.currentTime % 60)}` : `${Math.floor(audio.currentTime % 60)}`;
        
        if (audio) {
            setInterval(() => this.setState({
                duration: audio.duration,
                time: this.songTime(audio.currentTime),
                timePosition: (Math.floor(audio.currentTime / 60) === 0 ? "0" : `${Math.floor(audio.currentTime / 60)}`) + ":" + (Math.floor(audio.currentTime % 60) < 10 ? `0${Math.floor(audio.currentTime % 60)}` : `${Math.floor(audio.currentTime % 60)}`),
                timeDuration: (Math.floor(audio.duration % 60) < 10 ? `${Math.floor(audio.duration / 60)}:0${Math.floor(audio.duration % 60)}` : `${Math.floor(audio.duration / 60)}:${Math.floor(audio.duration % 60)}`),
                // timePosition: `${Math.floor(audio.currentTime / 60)}:${Math.floor(audio.currentTime % 60)}`,
                currentTime: (audio.currentTime/2.3),
            }), 1000)
            this.setState({ presentSong: this.props.presentSong });
        }
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.presentSong !== prevProps.presentSong) {
    //         let song = this.props.presentSong
    //         this.setState({ presentSong: song })
    //         this.song();
    //     }

    //     if (this.state.change) {
    //         this.song();
    //         this.changeSong();
    //         this.setState({ change: false })
    //     }

    // }

    handlePlay() {
        this.props.setCurrentSong(this.props.song);
        // this.props.setQueue(this.props.queue);
        this.props.toggleSong();
    }

    changeSong() {
        this.setState({ presentSong: this.props.songs[this.state.currentSong] });
        this.props.setCurrentSong(this.props.presentSong);
    }

    song() {
        let audio = document.getElementById('audio');
        if (this.props.playing === false) {
            audio.play();
            this.props.toggleSong();
            this.setState({
                playing: true,
                // play: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/pause_grey.png"
            })
        } else if (this.props.playing === true) {
            audio.pause();
            this.props.toggleSong();
            this.setState({ playing: false, 
                // play: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_grey.png"
            })
        }
    }

    previousSong() {
        let { songs, presentSong, queue } = this.props;
        // let audio = document.getElementById('audio');
        let a;
        if(this.state.shuffle) {
            a = queue;
        } else {
            a = songs;
        }
        let titles = a.map(a1 => a1.title);
        let title = presentSong.title;
        let nums;
        if(titles.indexOf(title) === 0 ) {
            this.setState({ currentSong: (this.state.repeat) ? (titles.indexOf(title)) : (titles.length - 1)})
            nums = (this.state.repeat) ? (a[titles.indexOf(title) % a.length]) : (a[(titles.length - 1)]);
            this.props.setCurrentSong(nums);
            if (this.props.playing === false) {
                this.props.toggleSong();
            }
        } else {
            this.setState({ currentSong: (this.state.repeat) ? (titles.indexOf(title) % a.length) : (titles.indexOf(title) - 1 % a.length)})
            nums =  (this.state.repeat) ? (a[titles.indexOf(title) % a.length]) : (a[(titles.indexOf(title) - 1) % a.length]);
        this.props.setCurrentSong(nums);
            if(this.props.playing === false) {
                this.props.toggleSong();
            }
        }
        // let titles = songs.map(song => song.title);
        // let title = presentSong.title;
        // let nums;
        // if(titles.indexOf(title) === 0 ) {
        //     this.setState({ currentSong: (this.state.repeat) ? (titles.indexOf(title)) : (titles.length - 1)})
        //     nums = (this.state.repeat) ? (songs[titles.indexOf(title) % songs.length]) : (songs[(titles.length - 1)]);
        //     this.props.setCurrentSong(nums);
        //     if (this.props.playing === false) {
        //         this.props.toggleSong();
        //     }
        // } else {
        //     this.setState({ currentSong: (this.state.repeat) ? (titles.indexOf(title) % songs.length) : (titles.indexOf(title) - 1 % songs.length)})
        //     nums =  (this.state.repeat) ? (songs[titles.indexOf(title) % songs.length]) : (songs[(titles.indexOf(title) - 1) % songs.length]);
        // this.props.setCurrentSong(nums);
        //     if(this.props.playing === false) {
        //         this.props.toggleSong();
        //     }
        // }
    }


    nextSong() {
        let { songs, presentSong, queue } = this.props;
        let b;
        if (this.state.shuffle) {
            b = queue;
        } else {
            b = songs;
        }
        let titles = b.map(b1 => b1.title);
        let title = presentSong.title;
        this.setState({ currentSong: (this.state.repeat) ? (titles.indexOf(title) % b.length) : (titles.indexOf(title) + 1% b.length) });
        let number;
        number = (this.state.repeat) ? (b[titles.indexOf(title) % b.length]) : (b[(titles.indexOf(title) + 1) % b.length]);
        this.props.setCurrentSong(number);
        if (this.props.playing === false) {
            this.props.toggleSong();
        }
    }

    repeat() {
        this.setState({ repeat: !this.state.repeat });
    }

    random(array) {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    shuffle() {
        let shuffled = this.random(this.props.songs.slice());
        if (!this.state.shuffle) this.props.setQueue(shuffled);
        this.setState({ shuffle: !this.state.shuffle });
    }


    handleClick() {
        this.changeSong();
        this.song();
    }

    setVolume(vol) {
        // this.sound.volume = (vol/100);
        let audio = document.getElementById('audio');
        audio.volume = (vol/100);
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
        let audio = document.getElementById('audio');
        if (audio.volume > 0) {
            this.setState({ previousVolume: audio.volume , volume: 0
             })
             audio.volume = 0;
            // this.state.volume = 0
        } else {
            audio.volume = this.state.previousVolume;
            this.setState({ volume: this.state.previousVolume *100  });
            // this.state.volume = this.state.previousVolume
        }
    }


    setTime(position) {
        // this.state.currentTime = position;
        this.setState({ currentTime: position })
    }

    
    render() {
        let { presentSong, playing } = this.props;
        let audio = document.querySelector('#audio');
        let audiopause = audio !== null ? audio.paused : null;
        let icon = audiopause == false ? "https://dotify-app-dev.s3-us-west-1.amazonaws.com/pause_white.png" : "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_circle_white.png";
        // let icon = playing === true ? "https://dotify-app-dev.s3-us-west-1.amazonaws.com/pause_grey.png" : "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_grey.png";
        return (
            <div className="player-div">
                <audio id="audio" volume={this.state.volume} src={presentSong.audio} autoPlay></audio>
                {/* <audio id="audio" volume={this.state.volume} src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/2-04%2BNice%2BFor%2BWhat.mp3"></audio> */}
                {/* <div className="track">
                </div> */}
                <div className="left-play">
                    <img src={presentSong.album_image} id="track_img"/>
                    <div className="texts">
                        {/* <p className="soname">{presentSong.title}</p> */}
                        <p className="soname">{presentSong.title}</p>
                        <p className="arname">{presentSong.artist_name}</p>
                        {/* <p className="soname">{presentSong.title}</p>
                        <p className="arname">{presentSong.artist_name}</p> */}
                    </div>
                    <img className="love" onClick={this.state.love === "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_empty.png" ? this.love : this.unlove} src={this.state.love} />
                </div>
                 <div className="center-play">
                     <div className="icons-playbar">
                        <img className="shuffle" onClick={() => this.shuffle()} src={this.state.shuffle ? "https://dotify-app-dev.s3-us-west-1.amazonaws.com/shuffle_green.png" : "https://dotify-app-dev.s3-us-west-1.amazonaws.com/shuffle_white.png"} />
                        <img className="prev" onClick={() => this.previousSong()} src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/prev_white.png"/>
                        <img className="play" onClick={() => this.song()} src={icon}/>
                        <img src="" className="play-hov" />
                        <img className="next" onClick={() => this.nextSong()} src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/next_white.png"/>
                        <img className="repeat" onClick={() => this.repeat()} src={this.state.repeat ? "https://dotify-app-dev.s3-us-west-1.amazonaws.com/repeat_green.png" : "https://dotify-app-dev.s3-us-west-1.amazonaws.com/repeat-white.png"} />
                     </div>

                     <div className="duration-bar">
                         <li>{this.state.timePosition}</li>
                        <input ref={this.sound} type="range" id="duration-bar" name="duration-bar" min="0" max="99" step="1" onChange={(e) => this.setTime(e.currentTarget.value)} value={this.state.currentTime} />
                        <li>{this.state.timeDuration}</li>
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
            presentSong: state.ui.playStatus.currentSong,
            playing: state.ui.playStatus.playing,
            shuffle: state.ui.playStatus.shuffle,
            queue: state.ui.playStatus.queue
        }
    }

    const mdp = dispatch => {
        return {
            setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
            toggleSong: () => (dispatch(toggleSong())),
            setQueue: (queue) => (dispatch(setQueue(queue)))
        // playCurrentSong: (status) => dispatch(playCurrentSong(status)),
        // updatePlayStatus: (status) => dispatch(updatePlayStatus(status)),
        // receiveCurrentSongId: (song) => dispatch(receiveCurrentSongId(song)),
        // clearCurrentSong: () => dispatch(clearCurrentSong()),
        // fetchSong: (songId) => dispatch(fetchSong(songId)),
        }
    };

export default connect(msp, mdp)(Player);