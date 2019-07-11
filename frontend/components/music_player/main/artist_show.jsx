import React from 'react';
import { connect } from 'react-redux';
import { fetchArtist } from '../../../actions/artist_actions'
import { NavLink } from 'react-router-dom'

class ArtistShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    render() {
        if (this.props.artist === undefined) return null;
        const { artist, albums, songs } = this.props;
        let newArtist = (
            <div className="artist-show">
                <div className="artist-header">
                <div className="bg-img">
                    <img className="artist-show-bg" src={artist.artist_image} />
                </div>
                    <h2 className="artist-name">{artist.name}</h2>
                    <button className="play-btn">PLAY</button>


                <div className="art-sho">
                    <h3>Popular</h3>
                    {songs.map( song => {
                        return <div className="art-song">
                            <div className="parent">
                                <div>
                                <img id="art-note" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/music_note.png" />
                                <li id="song-title">{song.title}</li>
                                </div>
                            {/* </div> */}
                            {/* <div className="stitle"> */}
                            {/* </div> */}
                            {/* <div id="duration"> */}
                                <li>{song.duration}</li>
                            </div>
                        </div>
                    })}
                    <h3>Albums</h3>
                    {albums.map( album => {
                        return <div className="alb-info">
                            <NavLink to={`/albums/${album.id}`}><img src={album.album_image} /></NavLink>
                                <li>{album.title}</li>
                                </div>
                                })}
                </div>
                </div>
            </div>
        )

        return (
            <div className="div-margin">
                {newArtist}
            </div>
        )
    }
}


const msp = (state, ownProps) => {
    const artistId = ownProps.match.params.artistId;
    const artist = state.entities.artists[artistId];
    const albums = Object.values(state.entities.albums).filter(album => album.artist_id == artistId);
    const albumIds = albums.map(album => album.id);
    // debugger;
    let songs = [];
    Object.values(state.entities.songs).forEach( song => albumIds.includes(song.album_id) ? songs.push(song) : null) 

    return {
        artist: artist,
        albums: albums,
        songs: songs
    }
}

const mdp = dispatch => {
    return {
        fetchArtist: (artistId) => dispatch(fetchArtist(artistId))
    }
}

export default connect(msp, mdp)(ArtistShow);

