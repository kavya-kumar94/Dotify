import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArtists, fetchArtist } from '../../../actions/artist_actions';
import Modal from '../../playlists/playlist_modal'
import { openModal } from '../../../actions/modal_actions'

class ArtistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {
        const { artists, openModal } = this.props
        let artistsNew = artists.map(artist => {
            return (
                <li>{artist.name}</li>
            )
        })
        return (
            <div>
                <div className="create-playlist">
                    <button onClick={() => openModal("new-playlist")} className="new-playlist-btn">NEW PLAYLIST</button>
                </div>
                <ul>
                    {artistsNew}
                </ul>
            </div>
        )
    }
}

const msp = state => {
    return {
        artists: Object.values(state.entities.artists),
    }
}

const mdp = dispatch => {
    return {
        fetchArtists: () => dispatch(fetchArtists()),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(msp, mdp)(ArtistIndex)