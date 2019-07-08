import * as PlaylistApiUtil from '../util/playlist_api_util'

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";
export const RECEIVE_PLAYLIST_ERRORS = "RECEIVE_PLAYLIST_ERRORS";
export const CLEAR_PLAYLIST_ERRORS = "CLEAR_PLAYLIST_ERRORS";

export const receivePlaylist = (playlist) => {
    return {
        type: RECEIVE_PLAYLIST,
        playlist
    }
}

export const receivePlaylists = (playlists) => {
    return {
        type: RECEIVE_PLAYLISTS,
        playlists
    }
}

export const destroyPlaylist = (playlist) => {
    return {
        type: DELETE_PLAYLIST,
        playlistId: playlist.id
    }
}

export const receivePlaylistErrors = (errors) => {
    return {
        type: RECEIVE_PLAYLIST_ERRORS,
        errors
    }
}

export const clearPlaylistErrors = () => {
    return {
        type: CLEAR_PLAYLIST_ERRORS
    }
}

export const fetchPlaylist = (id) => dispatch => {
    return PlaylistApiUtil.fetchPlaylist(id).then( playlist => dispatch(receivePlaylist(playlist)))
}

export const fetchPlaylists = () => dispatch => {
    return PlaylistApiUtil.fetchPlaylists().then( playlists => dispatch(receivePlaylists(playlists)))
}

export const createPlaylist = (playlist) => dispatch => {
    return PlaylistApiUtil.createPlaylist(playlist).then(playlist => dispatch(receivePlaylist(playlist))),
        err => dispatch(receivePlaylistErrors(err.responseJSON));
}

export const updatePlaylist = (playlist) => dispatch => {
    return PlaylistApiUtil.updatePlaylist(playlist).then( playlist => dispatch(receivePlaylist(playlist))),
        err => dispatch(receivePlaylistErrors(err.responseJSON));
}

export const deletePlaylist = (playlist) => dispatch => {
    return PlaylistApiUtil.deletePlaylist(playlist).then( playlist => dispatch(destroyPlaylist(playlist)))
}
