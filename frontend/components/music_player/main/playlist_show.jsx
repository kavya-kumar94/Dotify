import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { fetchPlaylist, deletePlaylist } from '../../../actions/playlist_actions'

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props);
        this.redirectPlaylists = this.redirectPlaylists.bind(this);
    }

    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    redirectPlaylists() {
        // debugger;
        this.props.deletePlaylist(this.props.playlist.id).then(this.props.history.push('/library/playlists'))
    }

    render() {
        if (this.props.playlist === undefined) return null;
        const { playlist , songs} = this.props;
        let newPlaylist = (
            <div className="play-show">
                <li className="playshowimg"><NavLink to={`/playlists/${playlist.id}`}><img src= {playlist.playlist_image} /></NavLink></li>
                {/* style={{ background- image: url("undefined") }}  */}
                <h2>{playlist.title}</h2>
                <li>{playlist.creator}</li>
                <button className="play-btn">PLAY</button>
                <button onClick={() => this.redirectPlaylists()} className="delete-btn-play-show">DELETE</button>
                <ul>
                    {/* { songs.map( song => {
                        return  <div>
                         {song.title}
                        </div>
                    })} */}
                    {/* {playlist.playlistSongIds.map( id => {
                        return <li>{songs.id}</li> */}
                    {/* })} */}
                </ul>
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
    const tracks = Object.values(state.entities.songs).filter( song => song.playlist_id == playlistId)
    const songIds = tracks.map( song => song.playlist_id)
    let songs = [];
    Object.values(state.entities.songs).forEach( song => songIds.includes(song.playlist_id) ? songs.push(song) : null )
    // debugger;
    return {
        playlist: playlist,
        songs: songs
    }
}

const mdp = dispatch => {
    return {
        fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId))
    }
}

export default connect(msp,mdp)(PlaylistShow);

