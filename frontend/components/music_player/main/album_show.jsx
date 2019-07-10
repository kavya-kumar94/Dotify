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
        // debugger;
        const { album, songs } = this.props;
        let newAlbum = (
            <div className="alb-sho">
            <div className="album-show">
                <li><NavLink to={`/albums/${album.id}`}><img src={album.album_image}/></NavLink></li>
                <h2>{album.title}</h2>
                <li className="artist-hov"><NavLink to={`/artists/${album.artist_id}`}>{album.artist_name}</NavLink></li>
                <button className="play-btn">PLAY</button>
                <li>{album.year}</li>
                <div className="album-pics">
                    <img className="like-album" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/love_empty.png"/>
                    <img className="extra-album" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/3dots.png"/>
                </div>
            </div>
            <div className="songs-list">
                {/* <h3>Songs</h3> */}
                {songs.map(song => {
                    return <li><img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/music_note.png"/>{song.title}</li>
                })}
            </div>
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
    const albumId = ownProps.match.params.albumId;
    // debugger;
    const album = state.entities.albums[albumId];
    const albumsongs = Object.values(state.entities.songs).filter(song => song.album_id == albumId);
    const songIds = albumsongs.map(song => song.id);
    let songs = [];
    Object.values(state.entities.songs).forEach(track => songIds.includes(track.id) ? songs.push(track) : null) 

    return {
        album: album,
        songs: songs
    }
}

const mdp = dispatch => {
    return {
        fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId))
    }
}

export default connect(msp, mdp)(AlbumShow);

