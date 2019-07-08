import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import musicPlayerReducer from './music_player_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    musicPlayer: musicPlayerReducer
})

export default uiReducer;