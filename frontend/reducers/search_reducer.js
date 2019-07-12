import {
    RECEIVE_SEARCH_RESULTS,
    CLEAR_SEARCH
} from '../actions/search_actions';

import { merge } from 'lodash';


const searchReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return merge({}, action.results);
        case CLEAR_SEARCH:
            return {};
        default:
            return state;
    }
}


export default searchReducer