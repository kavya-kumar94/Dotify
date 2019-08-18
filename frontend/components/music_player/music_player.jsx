import React from 'react';

import Navbar from './navbar/navbar_container';
import Player from './player';
import Main from './main/main';
import PlaylistIndex from '../music_player/main/playlist_index'
import PlaylistShow from '../music_player/main/playlist_show'
import AlbumShow from '../music_player/main/album_show'
import ArtistShow from '../music_player/main/artist_show'
import Search from '../music_player/main/search'
import { clearPlaylistErrors } from '../../actions/playlist_actions';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import errorsReducer from '../../reducers/errors_reducer';


class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let location = this.props.history.location.pathname;
        let nclass;
        if (location.includes("playlists")) {
            nclass = "playlists";
        } else if (location.includes("albums")) {
            nclass = "album";
        } else if (location.includes("artists")) {
            nclass = "artist";
        } else if (location.includes("search")) {
            nclass = "music-player";
        } else {
            nclass = "music-player";
        }


        let { songs, playing, song } = this.props;
        return (
                <div className={nclass}>
                    <Navbar />
                    <Player />
                    <Route exact path='/search' component={Main} />
                    <Route path='/library' component={Main} />
                    <Route path='/browse' component={Main} />
                    <Route exact path='/playlists' component={Main} />
                <Route path='/playlists/:playlistId' component={PlaylistShow} />
                <Route path='/albums/:albumId' component={AlbumShow} />
                <Route path='/artists/:artistId' component={ArtistShow} />
                </div>
        )
    }
}

const msp = state => {
    return {
        playlistErrors: state.errors.playlist

    }
}

const mdp = dispatch => ({
    clearPlaylistErrors: () => dispatch(clearPlaylistErrors())
});


export default connect(msp, mdp)(MusicPlayer);