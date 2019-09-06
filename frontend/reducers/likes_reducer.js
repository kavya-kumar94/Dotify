import { RECEIVE_LIKED_SONGS } from '../actions/like_actions'

import { merge } from 'lodash'

const likesReducer = (state = {}, action ) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_LIKED_SONGS:
            return merge({}, state, action.songs)
        default:
            return state;
    }
}

export default likesReducer;