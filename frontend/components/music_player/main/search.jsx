import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../../actions/search_actions';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            artists: {},
            albums: {},
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.fetchSearchResults(this.state)
        }
    }

    handleChange(e) {
        // const {  search } = this.state;

        this.setState({ input: e.target.value });
    }

    render() {
        const artists = Object.values(this.state.artists);
        const albums = Object.values(this.state.albums);
        const artistList = artists[0] ? (artists.map((artist) => {
            return (
                { artist })})) : null;



        const albumList = albums[0] ? albums.map((album) => {
            return (
                {album}
            )}) : null;



        const resultAlbums = albumList ? (
            <div className="index-root">
                <div className="index-container">
                    <h1 className="index-label">Albums</h1>
                    <div className="index">
                        {albumList}
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
                                    onKeyPress={this.handleKeyPress}
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
