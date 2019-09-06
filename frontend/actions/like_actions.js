import * as LikeAPIUtil from '../util/likes_api_util'

export const RECEIVE_LIKED_SONGS = "RECEIVE_LIKED_SONGS"


export const receiveLikedSongs = (songs) => {
    return {
        type: RECEIVE_LIKED_SONGS,
        songs
    }
}

export const fetchLikedSongs = () => dispatch => {
    return LikeAPIUtil.fetchLikedSongs().then(songs => dispatch(receiveLikedSongs(songs)))
}

export const saveSong = (userId, songId) => dispatch => {
    return LikeAPIUtil.saveSong(userId, songId)
}

export const unsaveSong = (likedSongId) => dispatch => {
    return LikeAPIUtil.unsaveSong(likedSongId)
}