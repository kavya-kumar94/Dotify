import {
    RECEIVE_SEARCH_RESULTS
} from '../../actions/search_actions';

import { merge } from 'lodash';


const searchReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return merge({}, action.results);
        default:
            return state;
    }
}


export default searchReducer