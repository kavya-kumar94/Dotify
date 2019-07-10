import {
    RECEIVE_ALBUM,
    RECEIVE_ALBUMS,
} from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions'
import { merge } from 'lodash';


const albumsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALBUMS:
            return merge({}, state, action.albums)
        case RECEIVE_ALBUM:
            return merge({}, state, action.payload.albums);
        case RECEIVE_ARTIST:
            return merge({}, state, action.payload.albums);
        default:
            return state;
    }
}


export default albumsReducer
