import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import albums from './albums_reducer'
import artists from './artists_reducer';
import genres from './genres_reducer';
import modal from './modal_reducer';
import music_player from './music_player_reducer';
import playlist_errors from './playlist_errors_reducer';
import playlists from './playlists_reducer';
import songs from './songs_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    errors,
    albums,
    artists,
    genres,
    modal,
    music_player,
    playlist_errors,
    playlists,
    songs
});

export default rootReducer;