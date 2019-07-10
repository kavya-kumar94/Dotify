import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { fetchAlbums, fetchAlbum } from '../../../actions/album_actions';
import Modal from '../../playlists/playlist_modal'
import { openModal } from '../../../actions/modal_actions'

class AlbumIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        const { albums } = this.props
        let albumsNew = albums.map(album => {
            return (
                <div>
                    <li><NavLink to={`/albums/${album.id}`}>{album.album_image}</NavLink></li>
                    <li><NavLink to={`/albums/${album.id}`}>{album.title}</NavLink></li>
                    {/* <h2>{album.title}</h2> */}
                    <li><NavLink to={`/artists/${album.artist_id}`}>{album.artist_name}</NavLink></li>
                    {/* <button className="play-btn">PLAY</button> */}
                    {/* <p>{album.year}</p> */}
                    {/* <p>{album.songs.count}</p> */}
                </div>
            )
        })

        return (
            <div>
                <div className="create-playlist">
                    <button onClick={() => openModal("new-playlist")} className="new-playlist-btn">NEW PLAYLIST</button>
                </div>
                <ul>
                    {albumsNew}
                </ul>
            </div>
        )
    }
}

const msp = state => {
    return {
        albums: Object.values(state.entities.albums),
    }
}

const mdp = dispatch => {
    return {
        fetchAlbums: () => dispatch(fetchAlbums()),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(msp, mdp)(AlbumIndex)