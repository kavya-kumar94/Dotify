import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, DELETE_PLAYLIST, RECEIVE_PLAYLIST_SONGS, CLEAR_PLAYLIST_SONGS, REMOVE_SONG_FROM_PLAYLIST } from '../actions/playlist_actions';
import { merge } from 'lodash';


const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            return merge({}, state, action.playlists);
        case RECEIVE_PLAYLIST_SONGS:
            return merge({}, state, action.playlistSongs);
        case CLEAR_PLAYLIST_SONGS:
            return {};
        case RECEIVE_PLAYLIST:
            return merge({}, state, action.payload.playlists);
        case REMOVE_SONG_FROM_PLAYLIST:
            let newerState = merge({}, state);
            let removeIndex = newerState[action.playlistId].playlistSongIds.indexOf(action.songId);
            newerState[action.playlistId].playlistSongIds.splice(removeIndex, 1);
            return newerState;
        case DELETE_PLAYLIST:
            let newState = merge({}, state);
            delete newState[action.playlistId]
            return newState;
        default:
            return state;
    }
}



export default playlistsReducer