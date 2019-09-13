import {
    RECEIVE_SONG,
    RECEIVE_SONGS,
    CLEAR_PLAYLIST_SONGS
} from '../actions/song_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions'
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_LIKED_SONGS,  } from '../actions/like_actions'
import { merge } from 'lodash';

const songsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PLAYLIST:
            return merge({}, state, action.payload.songs);
        case CLEAR_PLAYLIST_SONGS:
            return {};
        case RECEIVE_SONGS:
            return merge({}, state, action.songs)
        case RECEIVE_SONG:
            return merge({}, state, { [action.song.id]: action.song });
        case RECEIVE_ARTIST:
            return merge({}, state, action.payload.songs)
        case RECEIVE_LIKED_SONGS:
            return merge({}, state, action.songs)
        case RECEIVE_ALBUM:
            return merge({}, state, action.payload.songs)
        // case RECEIVE_SEARCH_RESULTS:
        //     return merge({}, state, action.songs)
        default:
            return state;
    }
}


export default songsReducer