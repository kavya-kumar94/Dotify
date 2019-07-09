import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArtists, fetchArtist } from '../../../actions/artist_actions';

class ArtistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {
        const { artists } = this.props
        let artistsNew = artists.map(artist => {
            return (
                <li>{artist.name}</li>
            )
        })
        return (
            <div>
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
        fetchArtists: () => dispatch(fetchArtists())
    }
}

export default connect(msp, mdp)(ArtistIndex)