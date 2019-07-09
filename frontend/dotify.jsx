import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup, deleteUser } from './actions/session_actions'

window.login = login;
window.logout = logout;
window.signup = signup;
window.deleteUser = deleteUser

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        window.currentUser = null;
        store = configureStore(preloadedState);
        window.getState = store.getState;
        window.dispatch = store.dispatch;
        // delete window.currentUser;
    } else {
        store = configureStore();
        window.getState = store.getState;
        window.dispatch = store.dispatch;
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});