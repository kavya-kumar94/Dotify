export const PLAY_CURRENT_SONG = "PLAY_CURRENT_SONG";
export const UPDATE_PLAY_STATUS = "UPDATE_PLAY_STATUS";
export const PLAY_CURRENT_LIST = "PLAY_CURRENT_LIST";

export const playCurrentSong = song => ({
    type: PLAY_CURRENT_SONG,
    song
});

export const playCurrentList = playlist => ({
    type: PLAY_CURRENT_LIST,
    playlist
});


export const updatePlayStatus = status => ({
    type: UPDATE_PLAY_STATUS,
    status
})
