import {
    RECEIVE_ARTIST,
    RECEIVE_ARTISTS,
} from '../actions/artist_actions';

import { merge } from 'lodash';

const artistsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ARTISTS:
            return merge({}, state, action.artists)
        case RECEIVE_ARTIST:
            return merge({}, state, { [action.artist.id]: action.artist });
        default:
            return state;
    }
}


export default artistsReducer