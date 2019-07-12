export const NEXT_SONG = "NEXT_SONG";
export const PREVIOUS_SONG = "PREVIOUS_SONG";
export const RECEIVE_SONG_LIST = "RECEIVE_SONG_LIST";

export const nextSong = numIndex => ({
    type: NEXT_SONG,
    numIndex
});


export const previousSong = numIndex => ({
    type: PREVIOUS_SONG,
    numIndex
});


export const receiveSongList = songs => ({
    type: RECEIVE_SONG_LIST,
    songs
});