import * as LikeAPIUtil from '../util/likes_api_util'

export const RECEIVE_LIKED_SONG = "RECEIVE_LIKED_SONG"


export const receiveLikedSongs = (songs) => {
    return {
        type: RECEIVE_LIKED_SONGS,
        songs
    }
}

export const fetchLikedSongs = (songs) => dispatch => {
    return LikeAPIUtil.fetchLikedSongs(songs).then(songs => dispatch(receiveLikedSongs(songs)))
}

export const saveSong = (userId, songId) => dispatch => {
    return LikeAPIUtil.saveSong(userId, songId)
}

export const unsaveSong = (likedSongId) => dispatch => {
    return LikeAPIUtil.unsaveSong(likedSongId)
}