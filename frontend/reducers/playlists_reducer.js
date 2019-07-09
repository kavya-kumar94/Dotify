import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, DELETE_PLAYLIST } from '../actions/playlist_actions';
import { merge } from 'lodash';


const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            return merge({}, state, action.playlists);
        case RECEIVE_PLAYLIST:
            return merge({}, state, action.payload.playlists);
        case DELETE_PLAYLIST:
            const newState = merge({}, state);
            delete newState[action.playlistId]
            return newState;
        default:
            return state;
    }
}



export default playlistsReducer