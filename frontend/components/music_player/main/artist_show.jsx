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
        const { artist } = this.props;
        let newArtist = (
            <div>
                <li><NavLink to={`/artists/${artist.id}`}>{artist.artist_image}</NavLink></li>
                <h2>{artist.name}</h2>
                {/* {artist.albums.map( album => {
                    <li><NavLink to={`/albums/${artist.album}`}>{artist.album}</NavLink></li>
                })} */}
                <button className="play-btn">PLAY</button>
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

    return {
        artist: artist,
    }
}

const mdp = dispatch => {
    return {
        fetchArtist: (artistId) => dispatch(fetchArtist(artistId))
    }
}

export default connect(msp, mdp)(ArtistShow);

