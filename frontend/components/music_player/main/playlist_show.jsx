import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { fetchPlaylist } from '../../../actions/playlist_actions'

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId);
    }

    render() {
        if (this.props.playlist === undefined) return null;
        // debugger;
        const { playlist , songs} = this.props;
        let newPlaylist = (
            <div className="play-show">
                <li className="playshowimg"><NavLink to={`/playlists/${playlist.id}`}><img src={playlist.playlist_image} /></NavLink></li>
                <h2>{playlist.title}</h2>
                <li>{playlist.creator}</li>
                {/* <button className="play-btn">PLAY</button> */}
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
        fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId))
    }
}

export default connect(msp,mdp)(PlaylistShow);

