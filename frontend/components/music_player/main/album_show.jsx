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

    play(e) {
        // let audio = new Audio(`${this.props.song.audio}`);
        // audio.play();
    }

    render() {
        if (this.props.album === undefined) return null;
        // debugger;
        const { album, songs } = this.props;
        let newAlbum = (
            <div className="alb-sho">
            <div className="album-show">
                <li className="alb-img"><NavLink to={`/albums/${album.id}`}><img src={album.album_image}/></NavLink></li>
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
                        <div className="track6">
                            {songs.map(song => {
                                return <div className="art-song">
                                    <div className="parent">
                                        <div className="track5">
                                            <img id="art-note" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/music_note.png" />
                                            <li id="song-title">{song.title}</li>
                                        </div>
                                        {/* </div> */}
                                        {/* <div className="stitle"> */}
                                        {/* </div> */}
                                        {/* <div id="duration"> */}
                                        <div>
                                            <li>{song.duration}</li>
                                        </div>


                                    </div>
                                </div>
                            })}
                        </div>
            </div>
        </div>
        )

        return (
            <div className="div-margin">
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
