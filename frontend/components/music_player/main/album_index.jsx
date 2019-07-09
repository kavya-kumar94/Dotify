import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbums, fetchAlbum } from '../../../actions/album_actions';

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
                <li>{album.title}</li>
            )
        })
        return (
            <div>
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
        fetchAlbums: () => dispatch(fetchAlbums())
    }
}

export default connect(msp, mdp)(AlbumIndex)