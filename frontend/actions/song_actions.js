import * as SongApiUtil from '../util/song_api_util'


export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';

export const receiveSong = (song) => {
    return {
        type: RECEIVE_SONG,
        song
    };
};

export const receiveSongs = (songs) => {
    return {
        type: RECEIVE_SONGS,
        songs
    };
};


export const fetchSong = (id) => dispatch => {
    return SongApiUtil.fetchSong(id).then(song => dispatch(receiveSong(song)))
}

export const fetchSongs = () => dispatch => {
    return SongApiUtil.fetchSongs().then(songs => dispatch(receiveSongs(songs)))
}