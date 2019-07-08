// export const PLAY_CURRENT_SONG = "PLAY_CURRENT_SONG";
// export const UPDATE_PLAYER_STATUS = "UPDATE_PLAYER_STATUS";
// export const CURRENT_PLAYLIST = "CURRENT_PLAYLIST";

// export const playCurrentSong = song => ({
//     type: PLAY_CURRENT_SONG,
//     song
// });

// export const currentPlaylist = playlist => ({
//     type: PLAY_CURRENT_LIST,
//     playlist
// });


// export const updateStatus = status => ({
//     type: UPDATE_PLAYER_STATUS,
//     status
// })


export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const TOGGLE_SONG = 'TOGGLE_SONG';


export const setCurrentSong = (song) => ({
    type: SET_CURRENT_SONG,
    song
})

export const toggleSong = () => ({
    type: TOGGLE_SONG
})
