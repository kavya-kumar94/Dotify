import {
    PLAY_CURRENT_SONG,
    PLAY_CURRENT_LIST,
    UPDATE_PLAY_STATUS,
} from '../../actions/player_actions';
import { merge } from 'lodash';

const musicControlReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case PLAY_CURRENT_LIST:
        case PLAY_CURRENT_SONG:
            return merge({}, state, { playStatus: 'play' });
        case UPDATE_PLAY_STATUS:
            return merge({}, state, { playStatus: action.status });
        default:
            return state;
    }
}

export default musicControlReducer;