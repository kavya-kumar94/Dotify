import React from 'react';
import { NavLink } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux'
import { setCurrentSong, setQueue, toggleSong, addToQueue } from '../../../actions/player_actions';
import { receiveSongId } from '../../../actions/song_actions'

class LikeIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/music_note.png",
            noteClass: "art-song",
            addIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/handtinytrans.gif",
            playing: false,
            currentSong: this.props.currentSong
        }
        this.note = this.note.bind(this);
        this.play = this.play.bind(this);
        this.song = this.song.bind(this);
        this.songAdd = this.songAdd.bind(this);

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
            noteClass: "art-song",
            addIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/handtinytrans.gif"

        })
    }

    play() {
        this.setState({
            noteIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_white.png",
            noteClass: "art-song2",
            addIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/3dots.png"

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
            this.props.setCurrentSong(this.props.like);
            this.props.toggleSong();
            this.setState({
                playing: true,
                // play: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/pause_grey.png"
            })
        } else if (this.props.playing === true) {
            this.props.setCurrentSong(this.props.like);
            audio.pause();
            this.props.toggleSong();
            this.setState({
                playing: false,
                // play: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_grey.png"
            })
        }
    }

    songAdd(songId) {
        this.props.openModal("unlike-song");
        this.props.receiveSongId(songId);
    }

    render() {
        let noteClass = this.state.noteClass;
        const { like } = this.props;
        let { openModal } = this.props

        return (
            <div onMouseEnter={this.play} onMouseLeave={this.note} className={noteClass}>
                <div className="flex">
                    <div>
                        <img onClick={() => this.song()} id="art-note" src={this.state.noteIcon} />
                    </div>
                    <div className="song-info">
                        <li>{like.title}</li>
                        <div className="alb-art">
                            <li><span><NavLink to={`/albums/${like.album_id}`}>{like.album_title}</NavLink></span></li>
                            <li className="sep">•</li>
                            <li><span><NavLink to={`/artists/${like.artist_id}`}>{like.artist_name}</NavLink></span></li>
                        </div>
                    </div>
                </div>

                <div className="add-duration">
                    <img onClick={() => this.songAdd(like.id)} id="add-song-menu" src={this.state.addIcon} />
                    {like.duration}
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


export default connect(msp, mdp)(LikeIndexItem);