
import {
    SET_CURRENT_SONG,
    TOGGLE_SONG
} from '../actions/music_player_actions';
import { merge } from 'lodash';


const musicPlayerReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        case SET_CURRENT_SONG:
            newState.currentSong = action.song;
            return newState;
        case TOGGLE_SONG:
            if (newState.playing === true) {
                newState.playing = false;
            } else {
                newState.playing = true;
            }
            return newState;
        default:
            return state;
    }
}

export default musicPlayerReducer;
