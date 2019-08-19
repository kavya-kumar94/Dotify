export const RECEIVE_CURRENT_SONG_ID = "RECEIVE_CURRENT_SONG_ID";
export const UPDATE_PLAY_STATUS = "UPDATE_PLAY_STATUS";
export const PLAY_CURRENT_LIST = "PLAY_CURRENT_LIST";
export const PLAY_CURRENT_SONG = "PLAY_CURRENT_SONG";
export const CLEAR_CURRENT_SONG = "CLEAR_CURRENT_SONG";

export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const TOGGLE_SONG = 'TOGGLE_SONG';
export const SET_QUEUE = 'SET_QUEUE';
export const CLEAR_QUEUE = 'CLEAR_QUEUE';

export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';
export const TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE';

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

export const playCurrentSong = status => ({
    type: PLAY_CURRENT_SONG,
    status
})

export const updatePlayStatus = status => ({
    type: UPDATE_PLAY_STATUS,
    status
})





export const setCurrentSong = (song) => ({
    type: SET_CURRENT_SONG,
    song
})

export const toggleSong = () => ({
    type: TOGGLE_SONG
})

export const setQueue = (queue) => ({
    type: SET_QUEUE,
    queue
})

export const clearQueue = () => ({
    type: CLEAR_QUEUE,
})

export const addToQueue = (song) => ({
    type: ADD_TO_QUEUE,
    song
})

export const toggleShuffle = () => ({
    type: TOGGLE_SHUFFLE
})
