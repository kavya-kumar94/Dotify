import {
    RECEIVE_GENRE,
    RECEIVE_GENRES,
} from '../actions/genre_actions';

import { merge } from 'lodash';

const genresReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_GENRES:
            return merge({}, state, action.genres)
        case RECEIVE_GENRE:
            return merge({}, state, { [action.genre.id]: action.genre });
        default:
            return state;
    }
}


export default genresReducer