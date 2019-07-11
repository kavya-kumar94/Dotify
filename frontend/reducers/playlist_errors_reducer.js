import { RECEIVE_PLAYLIST_ERRORS, CLEAR_PLAYLIST_ERRORS } from '../actions/playlist_actions';
import { merge } from 'lodash';


const playlistErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PLAYLIST_ERRORS:
            return action.errors;
        case CLEAR_PLAYLIST_ERRORS:
            return {};
        default:
            return state;
    }
}



export default playlistErrorsReducer;