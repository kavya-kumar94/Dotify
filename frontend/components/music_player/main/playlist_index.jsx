import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { fetchPlaylists, fetchPlaylist } from '../../../actions/playlist_actions';
import Modal from '../../playlists/playlist_modal'
import { openModal } from '../../../actions/modal_actions'

class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    render() {
        const { playlists, openModal } = this.props
        let playlistsNew = playlists.map( playlist => {
            return(
                <div className="playlist-link">
                    <li><NavLink to={`/playlists/${playlist.id}`}>{playlist.title}</NavLink></li>
                    <li><NavLink to={`/playlists/${playlist.id}`}>{playlist.creatorName}</NavLink></li>
                </div>
            )
        })
        return (
            <div>
                <div className="create-playlist">
                    <button onClick={() => openModal("new-playlist")} className="new-playlist-btn">NEW PLAYLIST</button>
                </div>
                <ul className= "playlist-index">
                {playlistsNew}
                </ul>
            </div>
        )
    }
}

const msp = state => {
    return {
        playlists: Object.values(state.entities.playlists),
    }
}

const mdp = dispatch => {
    return {
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(msp, mdp)(PlaylistIndex)