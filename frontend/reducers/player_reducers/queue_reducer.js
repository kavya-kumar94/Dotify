import {
    ADD_SONG,
    PREVIOUS_SONG,
    RECEIVE_SONG_LIST
} from '../../actions/queue_actions';


const queueReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SONG_LIST:
            return action.songs;
        case ADD_SONG:
            const newState = state.slice();
            newState < action.song;
            return newState;

        default:
            return state;
    }
}


export default queueReducer;