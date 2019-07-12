import {
    RECEIVE_ARTIST,
    RECEIVE_ARTISTS,
} from '../actions/artist_actions';

import { RECEIVE_SEARCH_RESULTS} from '../actions/search_actions'

import { merge } from 'lodash';

const artistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ARTISTS:
            return merge({}, state, action.artists)
        case RECEIVE_ARTIST:
            return merge({}, state, action.payload.artists);
        case RECEIVE_SEARCH_RESULTS:
            if (action.results.artists === undefined) {
                return state;
            } else {
                return merge({}, state, action.results.artists)
            }        
        default:
            return state;
    }
}


export default artistsReducer