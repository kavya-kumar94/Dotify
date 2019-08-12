export const RECEIVE_CURRENT_SONG_ID = "RECEIVE_CURRENT_SONG_ID";
export const UPDATE_PLAY_STATUS = "UPDATE_PLAY_STATUS";
export const PLAY_CURRENT_LIST = "PLAY_CURRENT_LIST";
export const CLEAR_CURRENT_SONG = "CLEAR_CURRENT_SONG";


export const receiveCurrentSongId = song => {
    return {
        type: RECEIVE_CURRENT_SONG_ID,
        song
    }
}

export const clearCurrentSong = () => {
    return {
        CLEAR_CURRENT_SONG,
    }
}


export const playCurrentList = playlist => ({
    type: PLAY_CURRENT_LIST,
    playlist
});


export const updatePlayStatus = status => ({
    type: UPDATE_PLAY_STATUS,
    status
})
