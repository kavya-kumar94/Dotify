import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import musicPlayerReducer from './music_player_reducer';
import searchReducer from './search_reducer';
import contextMenuReducer from './context_menu_reducer';
import currentSongReducer from './player_reducers/current_song_reducer'
import nowPlaying from './now_playing_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    // musicPlayer: musicPlayerReducer,
    search: searchReducer,
    // contextMenu: contextMenuReducer,
    nowPlaying: nowPlaying,

})

export default uiReducer;