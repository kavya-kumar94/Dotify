import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { fetchPlaylist, deletePlaylist, fetchPlaylistSongs, clearPlaylistSongs } from '../../../actions/playlist_actions'

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/music_note.png",
            noteClass: "playsongs"
        }
        this.note = this.note.bind(this);
        this.play = this.play.bind(this);
        this.redirectPlaylists = this.redirectPlaylists.bind(this);
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

    componentDidMount() {
        this.props.clearPlaylistSongs();
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        // this.props.fetchPlaylistSongs(this.props.playlistId);
    }

    redirectPlaylists() {
        this.props.deletePlaylist(this.props.playlist.id).then(this.props.history.push('/library/playlists'))
    }

    render() {
        if (this.props.playlist === undefined) return null;
        const { playlist , songs} = this.props;
        let noteClass = this.state.noteClass;
        let newPlaylist = (
            <div className="play-show">
                <div className="play-show1">
                    <li className="playshowimg"><NavLink to={`/playlists/${playlist.id}`}><img src= {playlist.playlist_image} /></NavLink></li>
                    {/* style={{ background- image: url("undefined") }}  */}
                    <h2>{playlist.title}</h2>
                    <li>{playlist.creator}</li>
                    <button className="play-btn">PLAY</button>
                    <button onClick={() => this.redirectPlaylists()} className="delete-btn-play-show">DELETE</button>
                    <div className="song-count">{Object.values(songs).length} SONGS</div>
                </div>

                <div className="play-show2">
                    <ul className="song-list">
                        {Object.values(songs).map( (song, idx) => { 
                            return <div key={idx} onMouseEnter={this.play} onMouseLeave={this.note} className={noteClass}>
                                <div className="flex">
                                    <div>
                                        <img id="art-note" src={this.state.noteIcon} />
                                    </div>
                                    <li>
                                    {song.title}
                                    </li>
                                    <li>
                                    {song.album}
                                    </li>
                                    <li>
                                    {song.artist}
                                    </li>
                                </div>

                                <div>
                                    {song.duration}
                                </div>

                            </div>

                        })}
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
    const playlist= state.entities.playlists[playlistId];
    // const tracks = Object.values(state.entities.songs).filter( song => song.playlist_id == playlistId)
    // const songIds = tracks.map( song => song.playlist_id)
    // debugger;
    const songs = state.entities.songs;
    // let songs = [];
    // Object.values(state.entities.songs).forEach( song => songIds.includes(song.playlist_id) ? songs.push(song) : null )
    return {
        playlist: playlist,
        songs: songs
    }
}

const mdp = dispatch => {
    return {
        fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
        fetchPlaylistSongs: (playlistId) => dispatch(fetchPlaylistSongs(playlistId)),
        clearPlaylistSongs: () => dispatch(clearPlaylistSongs())
    }
}

export default connect(msp,mdp)(PlaylistShow);

