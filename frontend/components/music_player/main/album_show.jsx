import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../../actions/album_actions'
import { NavLink } from 'react-router-dom'
class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId);
    }

    render() {
        if (this.props.album === undefined) return null;
        const { album } = this.props;
        let newAlbum = (
            <div>
                <li><NavLink to={`/albums/${album.id}`}>{album.album_image}</NavLink></li>
                <h2>{album.title}</h2>
                <li><NavLink to={`/artists/${album.artist_name}`}>{album.artist_name}</NavLink></li>
                <button className="play-btn">PLAY</button>
                <p>{album.year}</p>
            </div>
        )

        return (
            <div>
                {newAlbum}
            </div>
        )
    }
}


const msp = (state, ownProps) => {
    const album = state.entities.albums[ownProps.match.params.albumId];

    return {
        album: album,
    }
}

const mdp = dispatch => {
    return {
        fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId))
    }
}

export default connect(msp, mdp)(AlbumShow);

