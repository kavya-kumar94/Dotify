import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults, clearSearch } from '../../../actions/search_actions';
import { NavLink } from 'react-router-dom'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            // artists: {},
            // albums: {},
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    componentDidMount() {
        this.props.clearSearch();
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
        let { artists, albums } = this.props;
        // if (!artists && !albums) return null;
        
        // const artists = Object.values(this.state.artists);
        // const albums = Object.values(this.state.albums);
        let artistList = artists ? (artists.map((artist) => {
            // debugger
            return (
                <div>
                    <NavLink to={`/artists/${artist.id}`}><img src={artist.artist_image} /></NavLink>
                    {artist.name}
                </div>
               )})) : null;



        let albumList = albums ? albums.map((album) => {
            return (
                <div> 
                    <NavLink to={`/albums/${album.id}`}><img src={album.album_image} /></NavLink>
                    {album.title}
                </div>
            )}) : null;

        // let songList = songs ? songs.map((song) => {
        //     return (
        //         <div>
        //             <img id="art-note" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/music_note.png" />
        //             {song.title}
        //         </div>
        //     )
        // }) : null;

        //     // debugger;

        // const resultAlbums = albumList ? (
        //     <div className="index-root">
        //         <div className="index-container">
        //             <h1 className="index-label">Albums</h1>
        //             <div className="index">
        //                 {albumList}
        //             </div>

        //         </div>
        //     </div>
        // ) : null;



        // const resultArtists = artistList ? (
        //     <div className="index-root">
        //         <div className="index-container">
        //             <h1 className="index-label">Artists</h1>
        //             <div className="index">
        //                 {artistList}
        //             </div>
        //         </div>
        //     </div>
        // ) : null;



        const displayResults = (artistList || albumList ) ? (
                <div className="search-results">
                    <div className="index-container">
                        {artistList}
                        {albumList}
                        {/* {songList} */}
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
                    <div className="results">

                    {displayResults}
                    </div>
                </div>
        );
    }
}


const msp = state => {
    return {
        artists: Object.values(state.entities.artists),
        albums: Object.values(state.entities.albums),
        // songs: Object.values(state.entities.songs)
    }
}
const mdp = dispatch => {
    // debugger;
    return {
        fetchSearchResults: (input) => dispatch(fetchSearchResults(input)),
        clearSearch: () => dispatch(clearSearch())
    }
}


export default connect(msp, mdp)(Search);
