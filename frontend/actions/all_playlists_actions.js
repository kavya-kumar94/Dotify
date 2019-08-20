import * as PlaylistApiUtil from '../util/playlist_api_util'


export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS";

export const receiveAllPlaylists = (playlists) => {
    return {
        type: RECEIVE_ALL_PLAYLISTS,
        playlists
    }
}

export const fetchAllPlaylists = () => dispatch => {
    return PlaylistApiUtil.fetchAllPlaylists().then(playlists => dispatch(receiveAllPlaylists(playlists)))
}