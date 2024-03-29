import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
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
        let artistsNew = artists.map((artist, idx) => {
            
            return (
                <div key={idx} className="art-ind">
                    <li><NavLink to={`/artists/${artist.id}`}><img id="cover-img" src={artist.artist_image} /></NavLink></li>
                    <li className="art-on-hov"><NavLink to={`/artists/${artist.id}`}><img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_circle_white.png" /></NavLink></li>
                    <li><NavLink to={`/artists/${artist.id}`}>{artist.name}</NavLink></li>
                </div>
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