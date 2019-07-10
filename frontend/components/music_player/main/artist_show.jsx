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
                    <img className="artist-show-bg" src={artist.artist_image}/>
                    <h2 className="artist-name">{artist.name}</h2>
                    {/* <h2>{albums.map( album => {
                        return <p>{album.title}</p>
                    })}</h2>
                    {songs.map( song => {
                        return <li>{song.title}</li>
                    })} */}
                    <button className="play-btn">PLAY</button>
                </div>
            </div>
        )

        return (
            <div>
                {newArtist}
            </div>
        )
    }
}


const msp = (state, ownProps) => {
    const artist = state.entities.artists[ownProps.match.params.artistId];
    // const albums = artist.albums;
    // const songs = artist.songs
    return {
        artist: artist,
        // albums: albums,
        // songs: songs
    }
}

const mdp = dispatch => {
    return {
        fetchArtist: (artistId) => dispatch(fetchArtist(artistId))
    }
}

export default connect(msp, mdp)(ArtistShow);

