import React from 'react';
import { NavLink } from 'react-router-dom'
import ShowItem from './show_item';
import { fetchPlaylist, deletePlaylist, fetchPlaylistSongs, clearPlaylistSongs } from '../../../actions/playlist_actions';
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
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        // let audio = document.querySelector('#audio');
        // let { songs } = this.props;
        // if (audio) {
        //     this.setState({ currentSong: songs[Object.keys(songs)[0]] });
        //     this.props.setCurrentSong(this.state.currentSong);

        // }
        // this.props.fetchPlaylistSongs(this.props.playlistId);
    }

    // componentDid


    redirectPlaylists() {
        this.props.deletePlaylist(this.props.playlist.id).then(this.props.history.push('/library/playlists'))
    }

    render() {
        if (this.props.playlist === undefined) return null;

        const { playlist, songs, presentSong, setCurrentSong } = this.props;

        let newPlaylist = (
            <div className="play-show">
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
                            return <ShowItem key={idx} song={song} />
                        }

                        )}
                        {/* {playlist.playlistSongIds.map( id => {
                            return <li>{songs.id}</li> */}
                        {/* })} */}
                    </ul>
                </div>
            </div>
        )
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
    // const tracks = Object.values(state.entities.songs).filter( song => song.playlist_id == playlistId)
    // const songIds = tracks.map( song => song.playlist_id)
    // debugger;
    const songs = state.entities.songs;
    // let songs = [];
    // Object.values(state.entities.songs).forEach( song => songIds.includes(song.playlist_id) ? songs.push(song) : null )
    return {
        playlist: playlist,
        songs: songs,
        presentSong: state.ui.playStatus.currentSong
        // playing: state.ui.playStatus.playing,
    }
}

const mdp = dispatch => {
    return {
        fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
        fetchPlaylistSongs: (playlistId) => dispatch(fetchPlaylistSongs(playlistId)),
        clearPlaylistSongs: () => dispatch(clearPlaylistSongs()),
        setCurrentSong: (song) => dispatch(setCurrentSong(song))
    }
}


export default connect(msp, mdp)(PlaylistShow);

