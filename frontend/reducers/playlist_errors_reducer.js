import { RECEIVE_PLAYLIST_ERRORS, CLEAR_PLAYLIST_ERRORS, RECEIVE_PLAYLIST_SONG_ERRORS, CLEAR_PLAYLIST_SONG_ERRORS, RECEIVE_PLAYLIST_MESSAGE, CLEAR_PLAYLIST_MESSAGE } from '../actions/playlist_actions';
import { merge } from 'lodash';


const playlistErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PLAYLIST_ERRORS:
            return action.errors;
        case RECEIVE_PLAYLIST_SONG_ERRORS:
            return action.errors;
        case RECEIVE_PLAYLIST_MESSAGE:
            return action.message;
        case CLEAR_PLAYLIST_MESSAGE:
            return [];
        case CLEAR_PLAYLIST_ERRORS:
            return [];
        case CLEAR_PLAYLIST_SONG_ERRORS:
            return {};
        default:
            return state;
    }
}



export default playlistErrorsReducer;