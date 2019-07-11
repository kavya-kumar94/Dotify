import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import playlist from './playlist_errors_reducer';

export default combineReducers({
    session,
    playlist
});