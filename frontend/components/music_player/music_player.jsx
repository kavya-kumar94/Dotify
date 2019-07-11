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
        return (
                <div className="music-player">
                    <Navbar />
                    <Player />
                    <Route path='/search' component={Search} />
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