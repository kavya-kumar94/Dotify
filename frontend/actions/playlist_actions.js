import * as PlaylistApiUtil from '../util/playlist_api_util'
import * as PlaylistSongApiUtil from '../util/playlist_song_api_util'
import { RECEIVE_SONGS } from './song_actions';

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";
export const RECEIVE_PLAYLIST_ERRORS = "RECEIVE_PLAYLIST_ERRORS";
export const CLEAR_PLAYLIST_ERRORS = "CLEAR_PLAYLIST_ERRORS";
export const ADD_SONG_TO_PLAYLIST = "ADD_SONG_TO_PLAYLIST";
export const REMOVE_SONG_FROM_PLAYLIST = "REMOVE_SONG_FROM_PLAYLIST";
export const RECEIVE_PLAYLIST_SONGS = "RECEIVE_PLAYLIST_SONGS"
export const RECEIVE_PLAYLIST_SONG_ERRORS = "RECEIVE_PLAYLIST_SONG_ERRORS"
export const RECEIVE_PLAYLIST_ID = "RECEIVE_PLAYLIST_ID"
export const RECEIVE_PLAYLIST_MESSAGE = "RECEIVE_PLAYLIST_MESSAGE"
export const CLEAR_PLAYLIST_MESSAGE = "CLEAR_PLAYLIST_MESSAGE"
export const CLEAR_PLAYLIST_SONGS = "CLEAR_PLAYLIST_SONGS";
export const CLEAR_PLAYLIST_SONG_ERRORS = "CLEAR_PLAYLIST_SONG_ERRORS";

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
export const receivePlaylistId = playlistId => ({
    type: RECEIVE_PLAYLIST_ID,
    playlistId
});

export const receivePlaylistErrors = (errors) => {
    return {
        type: RECEIVE_PLAYLIST_ERRORS,
        errors
    }
}
export const deleteSongFromPlaylist = (playlistId, songId) => {
    return {
        type: REMOVE_SONG_FROM_PLAYLIST,
        playlistId,
        songId
    }
}

export const receivePlaylistSongErrors = (errors) => {
    return {
        type: RECEIVE_PLAYLIST_SONG_ERRORS,
        errors
    }
}

export const receivePlaylistMessage = message => ({
    type: RECEIVE_PLAYLIST_MESSAGE,
    message
})

export const receivePlaylistSongs = (playlistSongs) => {
    return{
        type: RECEIVE_PLAYLIST_SONGS,
        playlistSongs
    }
}

export const clearPlaylistSongs = () => {
    return{
        type: CLEAR_PLAYLIST_SONGS,
    }
}

export const clearPlaylistMessage = () => {
    return{
        type: CLEAR_PLAYLIST_MESSAGE,
    }
}

export const clearPlaylistErrors = () => {
    return {
        type: CLEAR_PLAYLIST_ERRORS
    }
}

export const clearPlaylistSongErrors = () => {
    return {
        type: CLEAR_PLAYLIST_SONG_ERRORS
    }
}

export const fetchPlaylist = (playlistId) => dispatch => {
    return PlaylistApiUtil.fetchPlaylist(playlistId).then( playlist => dispatch(receivePlaylist(playlist)))
}

export const fetchPlaylists = () => dispatch => {
    return PlaylistApiUtil.fetchPlaylists().then( playlists => dispatch(receivePlaylists(playlists)))
}

export const fetchPlaylistSongs = (playlistId) => dispatch => {
    return PlaylistSongApiUtil.fetchPlaylistSongs(playlistId).then( playlistSongs => dispatch(receivePlaylistSongs(playlistSongs)))
}

export const createPlaylist = (playlist) => dispatch => {
    return PlaylistApiUtil.createPlaylist(playlist).then(playlist => dispatch(receivePlaylist(playlist))).fail(err => {
        dispatch(receivePlaylistErrors(err.responseJSON))
    });
        
}

export const addSongToPlaylist = (playlist, songId) => dispatch => (
    PlaylistSongApiUtil.addSongToPlaylist(playlist, songId).then(message => dispatch(receivePlaylistMessage(message))).fail(err => {
        dispatch(receivePlaylistSongErrors(err.responseJSON))
    })
);

export const removeSongFromPlaylist = (playlistId, songId) => dispatch => (
    PlaylistSongApiUtil.removeSongFromPlaylist(playlistId, songId).then(
        // message => dispatch(receivePlaylistErrors(message)),
        ({playlist_id, song_id}) => dispatch(deleteSongFromPlaylist(playlist_id, song_id))
    )
);


// export const updatePlaylist = (playlist) => dispatch => {
//     return PlaylistApiUtil.updatePlaylist(playlist).then( playlist => dispatch(receivePlaylist(playlist))),
//         err => dispatch(receivePlaylistErrors(err.responseJSON));
// }

export const deletePlaylist = (playlistId) => dispatch => {
    return PlaylistApiUtil.deletePlaylist(playlistId).then( playlist => dispatch(destroyPlaylist(playlist)))
}
