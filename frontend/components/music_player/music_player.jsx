import React from 'react';

import Navbar from './navbar/navbar_container';
import Player from './player';
import Main from './main';

import { clearPlaylistErrors } from '../../actions/playlist_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
                     <Main />
                    {/* <Switch>
                    </Switch> */}

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