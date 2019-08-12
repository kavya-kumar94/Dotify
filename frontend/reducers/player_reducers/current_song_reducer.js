import { RECEIVE_CURRENT_SONG_ID, CLEAR_CURRENT_SONG } from '../../actions/player_actions';
import { RECEIVE_SONG_LIST } from '../../actions/queue_actions';
import { merge } from 'lodash';

const currentSongReducer = (state = {}, action) => {
    Object.freeze(state);


    switch (action.type) {
        case RECEIVE_CURRENT_SONG_ID:
            let newState = {}
            return merge({}, newState, action.song)
        case CLEAR_CURRENT_SONG:
            return {};
        case RECEIVE_SONG_LIST:
            return merge({}, state, action.songs[0]);
        default:
            return state;
    }
}


export default currentSongReducer;