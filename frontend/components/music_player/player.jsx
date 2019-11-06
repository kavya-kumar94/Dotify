import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux';
import { setCurrentSong, setQueue, toggleSong, clearQueue, addToQueue } from '../../actions/player_actions';
import { receiveCurrentSongId, clearCurrentSong, playCurrentSong } from '../../actions/player_actions';
import { fetchSong } from '../../actions/song_actions';
import { saveSong, unsaveSong } from '../../actions/like_actions';
import {  clearPlaylistErrors } from '../../actions/playlist_actions';
class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            love: false,
            shuffle: false,
            play: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_circle_white.png",
            repeat: false,
            volume_icon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/volume_grey.png",
            playing: false,
            time: "",
            volume: 100,
            previousVolume: 0,
            progress: 0,
            duration: "",
            timeDuration: "",
            timePosition: "",
            currentTime: "",
            currentSong: 0,
            presentSong: this.props.presentSong,
            change: false,
            duration: "",
            songs: this.props.songs,
            active: this.props.presentSong,
            alerts: ""
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
        this.love = this.love.bind(this);
        this.end = this.end.bind(this);
        this.updateProgress = this.updateProgress.bind(this);
        this.setProgress = this.setProgress.bind(this);
        this.displayAlert = this.displayAlert.bind(this);
    }

    componentDidMount() {
        this.setState({ alerts: ""})
        let audio = document.querySelector('#audio');
        audio.addEventListener('ended', this.end); 
        audio.addEventListener('error', this.nextSong); 
        audio.addEventListener('timeupdate', this.updateProgress); 
        audio.addEventListener('click', this.setProgress); 


        if (audio) {
            setInterval(() => this.setState({
                duration: audio.duration,
                time: this.songTime(audio.currentTime),
                timePosition: (Math.floor(audio.currentTime / 60) === 0 ? "0" : `${Math.floor(audio.currentTime / 60)}`) + ":" + (Math.floor(audio.currentTime % 60) < 10 ? `0${Math.floor(audio.currentTime % 60)}` : `${Math.floor(audio.currentTime % 60)}`),
                timeDuration: (Math.floor(audio.duration % 60) < 10 ? `${Math.floor(audio.duration / 60)}:0${Math.floor(audio.duration % 60)}` : `${Math.floor(audio.duration / 60)}:${Math.floor(audio.duration % 60)}`),
                currentTime: (audio.currentTime/2.3),
            }), 1000)
            this.setState({ presentSong: this.props.presentSong });
        }
    }

    componentWillUnmount() {
        let audio = document.querySelector('#audio');
        audio.removeEventListener('ended', this.end);
        audio.removeEventListener('error', this.next);
        audio.removeEventListener('timeupdate', this.updateProgress); 
        audio.removeEventListener('click', this.setProgress); 


    }

    componentDidUpdate(prevProps) {
        if (this.props.presentSong.title !== prevProps.presentSong.title) {            
            this.props.setCurrentSong(this.props.presentSong);
        }

    }

    end() {
        if (this.state.repeat) {
            this.play()
        } else {
            this.setState({ playing: false, currentTime: "0:00" });
            this.nextSong();
        }
    }

    handlePlay() {
        this.props.setCurrentSong(this.props.song);
        this.props.toggleSong();
    }

    changeSong() {
        this.setState({ presentSong: this.props.songs[this.state.currentSong] });
        this.props.setCurrentSong(this.props.presentSong);
    }

    previousSong() {
        let { songs, presentSong, queue } = this.props;
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
        this.props.clearQueue();
        let shuffled = this.random(this.props.songs.slice());
        if (!this.state.shuffle) this.props.setQueue(shuffled);
        this.setState({ shuffle: !this.state.shuffle });
    }


    handleClick() {
        this.changeSong();
        this.song();
    }

    setVolume(vol) {
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
        } else {
            audio.volume = this.state.previousVolume;
            this.setState({ volume: this.state.previousVolume *100  });
        }
    }


    setTime(position) {
        this.setState({ currentTime: position })
    }

    displayAlert() {
        window.setTimeout(function () {
            $(".alert").fadeTo(500, 0).slideUp(500, function () {
                $(this).remove();
            });
        }, 1000);
        if(!this.state.love) {
            this.setState({ alerts: 'Song has been added to your likes' })
        } else {
            this.setState({ alerts: 'Song has been removed from your likes' }) 
        }
    }

    love() {
        if(!this.state.love) {
            this.props.saveSong(this.props.userId, this.props.likeId)
            this.setState({ love: !this.state.love})
            this.displayAlert();
        } else {
            this.props.unsaveSong(this.props.likeId)
            this.setState({love: !this.state.love})
            this.displayAlert();
        }
    }

    setProgress(e) {
        let audio = document.querySelector('#audio');
        let target = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
        let width = target.clientWidth;
        let rect = target.getBoundingClientRect();
        let offsetX = e.clientX - rect.left;
        let duration = audio.duration;
        let currentTime = (duration * offsetX) / width;
        let progress = (currentTime * 100) / duration;

        audio.currentTime = currentTime;
        this.setState({ progress: progress });
        audio.play();
    }

    updateProgress() {
        let audio = document.querySelector('#audio');
        let duration = audio.duration;
        let currentTime = audio.currentTime;
        let progress = (currentTime * 100) / duration;

        this.setState({ progress: progress });
    }

    song() {
        let audio = document.getElementById('audio');
        if (this.props.playing === false) {
            audio.play()
            this.props.toggleSong()
            this.setState({
                playing: true,
            })
        } else if (this.props.playing === true) {
            audio.pause()
            this.props.toggleSong()
            this.setState({
                playing: false,
            })
        }
    }
    
    render() {
        let { presentSong, playing } = this.props;
        let audio = document.querySelector('#audio');
        let audiopause = audio !== null ? audio.paused : null;
        let icon = audiopause == false ? "https://dotify-app-dev.s3-us-west-1.amazonaws.com/pause_white.png" : "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_circle_white.png";
        return (
            <div className="player-div">
                <audio id="audio" volume={this.state.volume} src={presentSong.audio} autoPlay></audio>
                <div className="error-div">
                    <div class="new-alert" role="alert">
                        {this.state.alerts}
                    </div>
                </div>
                <div className="left-play">
                    <img src={presentSong.album_image} id="track_img"/>
                    <div className="texts">
                        <p className="soname">{presentSong.title}</p>
                        <p className="arname">{presentSong.artist_name}</p>
                    </div>
                    <img className="love" onClick={this.love} src={this.state.love ? "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_filled.png" : "https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_empty.png"} />
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
                            <div className="player-progress-container" onClick={this.setProgress}>
                                <span className="player-progress-value" style={{ width: this.state.progress + '%' }}></span>
                            </div>
                            <li>{this.state.timeDuration}</li>
                        </div>
                </div>
                <div className="right-play">
                    <img className="playlist" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/playlist-grey.png"/>
                    {this.state.volume > 0 ? <i ref={this.sound} onClick={() => this.toggleMute()} className="fas fa-volume-up"></i> : <i ref={this.sound} onClick={() => this.toggleMute()} className="fas fa-volume-mute"></i>}
                    <input ref={this.sound} type="range" id="volume" name="volume" min="0" max="99" step="1" className="progress-bar-input" value={this.state.volume} onChange={(e) => this.setVolume(e.currentTarget.value)} />
                </div>  
            </div>
        )
    }
}


    const msp = (state, props) => {
        debugger;
        let songs = Object.values(state.entities.songs);
        let songIdx;
        // let song = Object.values(state.entities.songs).filter(song => song.title === state.ui.playStatus.currentSong.title);
        Object.values(state.entities.songs).map((song, idx) => song.title === state.ui.playStatus.currentSong.title ? songIdx = idx : null)
        let likeId = Object.keys(state.entities.songs)[songIdx]
        debugger;
        return {
            songs,
            likeId,
            presentSong: state.ui.playStatus.currentSong,
            playing: state.ui.playStatus.playing,
            shuffle: state.ui.playStatus.shuffle,
            queue: state.ui.playStatus.queue,
            userId: state.session.id
        }
    }

    const mdp = dispatch => {
        return {
            setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
            toggleSong: () => (dispatch(toggleSong())),
            setQueue: (queue) => (dispatch(setQueue(queue))),
            clearQueue: () => dispatch(clearQueue()),
            saveSong: (userId, songId) => dispatch(saveSong(userId, songId)),
            unsaveSong: (likedSongId) => dispatch(unsaveSong(likedSongId)),
            clearPlaylistErrors: () => dispatch(clearPlaylistErrors())
        }
    };

export default connect(msp, mdp)(Player);