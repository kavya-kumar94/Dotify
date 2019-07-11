import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../../actions/search_actions';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: {
                input: "",
            },
            artists: {},
            albums: {},
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const {  search } = this.state;

        this.setState({ search: { input: e.target.value } });
    }

    render() {

        const artists = Object.values(this.state.artists);
        const albums = Object.values(this.state.albums);

        const artistList = artists[0] ? artists.map((artist) => {
            let albumId = artist.albumIds !== undefined ? artist.albumIds[0] : null;

            return (
                <h2>ARTIST</h2>
            )
        }) : null;



        const listAlbums = albums[0] ? albums.map((album) => {
            let songIds = album.songIds ? album.songIds : [];
            return (
                <h2>ALBUMS</h2>
            )
        }) : null;



        const resultAlbums = listAlbums ? (
            <div className="index-root">
                <div className="index-container">
                    <h1 className="index-label">Albums</h1>
                    <div className="index">
                        {listAlbums}
                    </div>

                </div>
            </div>
        ) : null;



        const resultArtists = artistList ? (
            <div className="index-root">
                <div className="index-container">
                    <h1 className="index-label">Artists</h1>
                    <div className="index">
                        {artistList}
                    </div>
                </div>
            </div>
        ) : null;



        const displayResults = resultArtists || resultAlbums ? (
                <div className="search-results">
                    <div className="index-container">
                        {resultArtists}
                        {resultAlbums}
                    </div>
                </div>
    
        ) : (
                    <div className="search-content">
                        <div className="search-content-container">
                            <div className="no-search">
                                <h1>Search Results Appear Here.</h1>
                            </div>
                        </div>
                    </div>
            )
        return (
                <div className="search">
                    <div className="search-header">
                        <div className="search-input">
                            <div className="search-input-container">
                                <input
                                    type="text"
                                    className="SearchInputBox"
                                    placeholder="Start typing..."
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    {displayResults}
                </div>
        );
    }
}


const mdp = dispatch => {
    return {
        fetchSearchResults: (input) => dispatch(fetchSearchResults(input))
    }
}


export default connect(null, mdp)(Search);
