import { RECEIVE_PLAYLIST_ID } from '../actions/playlist_actions';


export default function modalPlaylistReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_PLAYLIST_ID:
            return action.playlistId;
        default:
            return state;
    }
}