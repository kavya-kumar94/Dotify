import { combineReducers } from 'redux';
import currentSong from './current_song_reducer';
import controls from './music_control_reducer';
import queue from './queue_reducer';
import queueIndex from './queue_index_reducer';


export default combineReducers({
    currentSong,
    controls,
    queue,
    queueIndex
});