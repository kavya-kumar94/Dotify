import { RECEIVE_ALL_PLAYLISTS } from '../actions/all_playlists_actions';
import { merge } from 'lodash';


const allPlaylistsReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return merge({}, state, action.playlists);
        default:
            return state;
    }
}

export default allPlaylistsReducer