import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_NEW_USER = 'RECEIVE_NEW_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_NEW_USERS = 'RECEIVE_NEW_USERS';

export const receiveCurrentUser = currentUser => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser
    })
};

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => {
    return({
        type: RECEIVE_SESSION_ERRORS,
        errors
    })
};

export const receiveNewUser = (payload) => ({
    type: RECEIVE_NEW_USER,
    payload
});

export const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const receiveNewUsers = (users) => ({
    type: RECEIVE_NEW_USERS,
    users
});

export const loginDemo = () => dispatch => (
    ApiUtil.loginDemo().then(user => (
        dispatch(receiveCurrentUser(user))
    ),    err => (
        dispatch(receiveErrors(err.responseJSON))
        ))
);

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(user => (
        dispatch(logoutCurrentUser())
    ))
);
