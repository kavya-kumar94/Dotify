import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {[action.currentUser.id]: action.currentUser});
        // case RECEIVE_create_USER:
        //     let tempState = merge({}, state,
        //     action.payload.followers,
        //     action.payload.following); 
        //     delete tempState[action.payload.user.id];
        //     let createState = merge({}, tempState, { [action.payload.user.id]: action.payload.user });
        //     return createState
        case RECEIVE_ALL_USERS:
            return merge({}, state, action.users);
        // case RECEIVE_create_USERS:
        //     return action.users
        default:
            return state;
    }
};

export default usersReducer;