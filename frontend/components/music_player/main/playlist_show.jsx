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
        const { playlist } = this.props;
        let newPlaylist = (
            <div className="play-show">
                <li><NavLink to={`/playlists/${playlist.id}`}><img src={playlist.playlist_image} /></NavLink></li>
                <li>{playlist.title}</li>
                <li>{playlist.creator}</li>
                <ul>
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
    const playlist= state.entities.playlists[ownProps.match.params.playlistId];
    // debugger;
    return {
        playlist: playlist,
    }
}

const mdp = dispatch => {
    return {
        fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId))
    }
}

export default connect(msp,mdp)(PlaylistShow);

