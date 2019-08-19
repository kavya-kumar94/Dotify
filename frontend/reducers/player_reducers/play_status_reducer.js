import {
    PLAY_CURRENT_SONG,
    PLAY_CURRENT_LIST,
    UPDATE_PLAY_STATUS,
} from '../../actions/player_actions';

import {
    SET_CURRENT_SONG,
    TOGGLE_SONG,
    SET_QUEUE,
    ADD_TO_QUEUE,
    TOGGLE_SHUFFLE
} from '../../actions/player_actions';

import { merge } from 'lodash';

const nullState = {
    currentSong: {
        audio: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/03.%2BSICKO%2BMODE.mp3",
        title: "SICKO MODE",
        album_image: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/astro_cover.jpg",
        artist_name: "Travis Scott"
    },
    playing: true,
    queue: [{
        audio: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/03.%2BSICKO%2BMODE.mp3",
        title: "SICKO MODE",
        album_image: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/astro_cover.jpg",
        artist_name: "Travis Scott"
    }],
    shuffle: false
};


const musicControlReducer = (state = nullState, action) => {
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
        case SET_QUEUE:
            newState.queue = action.queue;
            return newState;
        case ADD_TO_QUEUE:
            newState.queue.push(action.song);
            return newState;
        default:
            return state;
    }
}


// const musicControlReducer = (state = {}, action) => {
//     Object.freeze(state);

//     switch (action.type) {
//         case PLAY_CURRENT_LIST:
//         case PLAY_CURRENT_SONG:
//             return merge({}, state, { playStatus: true });
//         case UPDATE_PLAY_STATUS:
//             return merge({}, state, { playStatus: action.status });
//         default:
//             return state;
//     }
// }

export default musicControlReducer;