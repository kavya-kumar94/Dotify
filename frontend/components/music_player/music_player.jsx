import React from 'react';

import Navbar from './navbar/navbar_container';
import Player from './player';
import Main from './main/main';
import PlaylistIndex from '../music_player/main/playlist_index'
import PlaylistShow from '../music_player/main/playlist_show'
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
                    <Route path='/library' component={Main} />
                    <Route path='/browse' component={Main} />
                    <Route exact path='/playlists' component={Main} />
                <Route path='/playlists/:playlistId' component={PlaylistShow} />
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