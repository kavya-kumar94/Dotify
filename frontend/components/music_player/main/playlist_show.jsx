import React from 'react';
import { NavLink } from 'react-router-dom'
import ShowItem from './show_item';
import { fetchPlaylist, deletePlaylist, fetchPlaylistSongs, clearPlaylistSongs, receivePlaylistId, clearPlaylistErrors } from '../../../actions/playlist_actions';
import { connect } from 'react-redux';
import { setCurrentSong, setQueue, toggleSong, addToQueue } from '../../../actions/player_actions';
import { receiveSongId } from '../../../actions/song_actions'
class PlaylistShow extends React.Component {
    constructor(props) {
        super(props);
        this.redirectPlaylists = this.redirectPlaylists.bind(this);
        // this.song = this.song.bind(this);
        // this.changeSong = this.changeSong.bind(this);

    }

    componentDidMount() {
        this.props.clearPlaylistSongs();
        this.props.clearPlaylistErrors();
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        this.props.receivePlaylistId(this.props.match.params.playlistId);
        // let audio = document.querySelector('#audio');
        // let { songs } = this.props;
        // if (audio) {
        //     this.setState({ currentSong: songs[Object.keys(songs)[0]] });
        //     this.props.setCurrentSong(this.state.currentSong);

        // }
        // this.props.fetchPlaylistSongs(this.props.playlistId);
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.match.params.playlistId != this.props.match.params.playlistId
        ) {
            this.props
                .fetchPlaylist(this.props.match.params.playlistId)
        }
    }

    renderErrors() {
        window.setTimeout(function () {
            $(".alert").fadeTo(500, 0).slideUp(500, function () {
                $(this).remove();
            });
        }, 4000);
        if(this.props.errors) {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
        }
    }


    redirectPlaylists() {
        this.props.deletePlaylist(this.props.playlist.id).then(this.props.history.push('/library/playlists'))
    }

    render() {
        if (this.props.playlist === undefined) return null;

         let classfile = this.props.errors.length > 0 ? "alert" : "classno"

        const { playlist, songs, setCurrentSong, playlistId } = this.props;

        let newPlaylist = (
            <div className="play-show">
                <div className="play-show-div">

                <div className="play-show1">
                    {/* <NavLink to={`/playlists/${playlist.id}`}></NavLink> */}
                    <li id="show-img" className="playshowimg"><img id="show-img" src= {playlist.playlist_image} /></li>
                    {/* style={{ background- image: url("undefined") }}  */}
                    <h2>{playlist.title}</h2>
                    <li>{playlist.creator}</li>
                    <div className="btns-play-show">
                        <button onClick={()=> setCurrentSong(Object.values(songs)[0])} className="play-btn">PLAY</button>
                        <button onClick={() => this.redirectPlaylists()} className="delete-btn-play-show">DELETE</button>

                    </div>
                    <div className="song-count">{Object.values(songs).length} SONGS</div>
                </div>

                <div className="play-show2">
                    <ul className="song-list">
                        {Object.values(songs).map( (song, idx) => { 
                            return <ShowItem key={idx} song={song} playlistId={playlist.id} />
                        }

                        )}
                        {/* {playlist.playlistSongIds.map( id => {
                            return <li>{songs.id}</li> */}
                        {/* })} */}
                    </ul>
                </div>
                </div>
                <div className="error-div">
                    {console.log(this.props.errors)}
                <div class={classfile} role="alert">
                        {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"></span></button> */}
                        {this.renderErrors()}
                    </div>
                </div>
                    
            </div>
        )
        // debugger;
        return (
        <div className="div-margin">
            {newPlaylist}
        </div>
        )
    }
}

const msp = (state, ownProps) => {
    const playlistId = ownProps.match.params.playlistId;
    const playlist = state.entities.playlists[playlistId];
    const songs = Object.keys(state.entities.songs).map(str => parseInt(str)).filter(song => playlist && playlist.playlistSongIds.includes(song))
    // const songIds = tracks.map( song => song.playlist_id)
    // debugger;
    // const songs = state.entities.songs;
    // let songs = [];
    // Object.values(state.entities.songs).forEach( song => songIds.includes(song.playlist_id) ? songs.push(song) : null )
    let newSongs = {}
    for(let i = 0; i < songs.length; i++) {
        newSongs[songs[i]] = state.entities.songs[songs[i]];
    }
    
    return {
        playlist: playlist,
        songs: newSongs,
        currentSong: state.ui.playStatus.currentSong,
        errors: state.errors.playlist
    }
}

const mdp = dispatch => {
    return {
        fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
        fetchPlaylistSongs: (playlistId) => dispatch(fetchPlaylistSongs(playlistId)),
        clearPlaylistSongs: () => dispatch(clearPlaylistSongs()),
        setCurrentSong: (song) => dispatch(setCurrentSong(song)),
        toggleSong: () => (dispatch(toggleSong())),
        setQueue: (queue) => (dispatch(setQueue(queue))),
        receivePlaylistId: (playlistId) => dispatch(receivePlaylistId(playlistId)),
        clearPlaylistErrors: () => dispatch(clearPlaylistErrors())
    }
}


export default connect(msp, mdp)(PlaylistShow);

