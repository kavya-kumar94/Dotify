import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_SONG_ID, CLEAR_SONG_ID } from '../actions/song_actions';
import { RECEIVE_PLAYLIST_ID } from '../actions/playlist_actions'

export default function modalPlaylistReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_SONG_ID:
            return action.songId;
        // case CLEAR_SONG_ID:
        //     return null;
        default:
            return state;
    }
}