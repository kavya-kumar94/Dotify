import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
// export const RECEIVE_create_USER = 'RECEIVE_create_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
// export const RECEIVE_create_USERS = 'RECEIVE_create_USERS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const REMOVE_USER = "REMOVE_USER"

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
        type: RECEIVE_ERRORS,
        errors
    })
};

// export const receivecreateUser = (payload) => ({
//     type: RECEIVE_create_USER,
//     payload
// });

export const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
});

// export const receivecreateUsers = (users) => ({
//     type: RECEIVE_create_USERS,
//     users
// });

export const clearErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS,
    }
};

export const removeUser = (user) => ({
    type: REMOVE_USER,
    userId: user.id
})


export const deleteUser = (user) => dispatch => (
    ApiUtil.deleteUser(user).then( user => (
        dispatch(removeUser(user))
    )), err => (
        dispatch(receiveErrors(err.responseJSON))
    )
)

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
