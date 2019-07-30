import * as PlaylistApiUtil from '../util/playlist_api_util'
import * as PlaylistSongApiUtil from '../util/playlist_song_api_util'

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";
export const RECEIVE_PLAYLIST_ERRORS = "RECEIVE_PLAYLIST_ERRORS";
export const CLEAR_PLAYLIST_ERRORS = "CLEAR_PLAYLIST_ERRORS";

export const receivePlaylist = (payload) => {
    return {
        type: RECEIVE_PLAYLIST,
        payload
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

export const fetchPlaylist = (playlistId) => dispatch => {
    return PlaylistApiUtil.fetchPlaylist(playlistId).then( playlist => dispatch(receivePlaylist(playlist)))
}

export const fetchPlaylists = () => dispatch => {
    return PlaylistApiUtil.fetchPlaylists().then( playlists => dispatch(receivePlaylists(playlists)))
}

export const createPlaylist = (playlist) => dispatch => {
    return PlaylistApiUtil.createPlaylist(playlist).then(playlist => dispatch(receivePlaylist(playlist))).fail(err => {
        dispatch(receivePlaylistErrors(err.responseJSON))
    });
        
}

export const addSongToPlaylist = (playlistId, songId) => dispatch => (
    PlaylistSongApiUtil.addSongToPlaylist(playlistId, songId).then(
        // message => dispatch(receivePlaylistErrors(message)),
        err => dispatch(receivePlaylistErrors(err.responseJSON))
    )
);

export const deletePlaylistSong = (playlistId, songId) => dispatch => (
    PlaylistSongApiUtil.deletePlaylistSong(playlistId, songId).then(
        // message => dispatch(receivePlaylistErrors(message)),
        err => dispatch(receivePlaylistErrors(err.responseJSON))
    )
);


// export const updatePlaylist = (playlist) => dispatch => {
//     return PlaylistApiUtil.updatePlaylist(playlist).then( playlist => dispatch(receivePlaylist(playlist))),
//         err => dispatch(receivePlaylistErrors(err.responseJSON));
// }

export const deletePlaylist = (playlistId) => dispatch => {
    return PlaylistApiUtil.deletePlaylist(playlistId).then( playlist => dispatch(destroyPlaylist(playlist)))
}
