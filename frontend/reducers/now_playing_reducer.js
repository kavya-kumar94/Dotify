import { combineReducers } from 'redux';

import currentSong from './player_reducers/current_song_reducer';
import queues from './player_reducers/queues_reducer';
import playStatus from './player_reducers/play_status_reducer';


export default combineReducers({
    playStatus,
    currentSong,
    queues
});