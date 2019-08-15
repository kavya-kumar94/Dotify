import React from 'react';
import { NavLink } from 'react-router-dom';
import { setCurrentSong, setQueue, toggleSong, addToQueue } from '../../../actions/player_actions';
import { receiveSongId } from '../../../actions/song_actions'
import { connect } from 'react-redux'


class ShowItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/music_note.png",
            noteClass: "playsongs",
            playing: false,
            currentSong: this.props.currentSong
        }
        this.note = this.note.bind(this);
        this.play = this.play.bind(this);
        this.song = this.song.bind(this);

    }

    componentDidMount() {
        let audio = document.querySelector('#audio');
        if (audio) {
            this.setState({ currentSong: this.props.currentSong });
        }
    }

    note() {
        this.setState({
            noteIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/music_note.png",
            noteClass: "playsongs"
        })
    }

    play() {
        this.setState({
            noteIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_white.png",
            noteClass: "play-show3"
        })
    }

    song() {
        let audio = document.getElementById('audio');
        console.log(this.props.playing);

        if (this.props.playing === false) {
            var playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // Automatic playback started!
                    // Show playing UI.
                    console.log("done")
                })
                    .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                    });
            }
            // audio.play();
            this.props.setCurrentSong(this.props.song);
            this.props.toggleSong();
            this.setState({
                playing: true,
                // play: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/pause_grey.png"
            })
        } else if (this.props.playing === true) {
            this.props.setCurrentSong(this.props.song);
            audio.pause();
            this.props.toggleSong();
            this.setState({
                playing: false,
                // play: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_grey.png"
            })
        }
    }

    render() {
        let noteClass = this.state.noteClass;
        const song = this.props.song;
        // debugger;
        return(
        <div onMouseEnter={this.play} onMouseLeave={this.note} className={noteClass}>
            <div className="flex">
                <div>
                        <img onClick={() => this.song()} id="art-note" src={this.state.noteIcon} />
                </div>
                <div className="song-info">
                    <li>{song.title}</li>
                    <div className="alb-art">
                            <li><span><NavLink to={`/albums/${song.album_id}`}>{song.album_title}</NavLink></span></li>
                            <li className="sep">•</li>
                            <li><span><NavLink to={`/artists/${song.artist_id}`}>{song.artist_name}</NavLink></span></li>
                    </div>
                </div>
            </div>

            <div>
                {song.duration}
            </div>

        </div>
        )
    }
}

const msp = state => {
    return {
        currentSong: state.ui.playStatus.currentSong,
        playing: state.ui.playStatus.playing,
        // songId: state.entities.addSong.songId
    }
}


const mdp = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
        toggleSong: () => (dispatch(toggleSong())),
        setQueue: (queue) => (dispatch(setQueue(queue))),
        receiveSongId: (songId) => dispatch(receiveSongId(songId))
    }
}


export default connect(msp,mdp)(ShowItem);