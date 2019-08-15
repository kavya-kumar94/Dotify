// export const createPlaylistSong = (playlistsong) => {
//     return $.ajax({
//         method: "POST",
//         url: "/api/playlistsongs",
//         data: { playlistsong }
//     });
// };

export const deletePlaylistSong = (playlistId, songId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/playlists/${playlistId}/songs/${songId}`
    });
};

export const addSongToPlaylist = (playlistId, songId) => (
    $.ajax({
        method: 'POST',
        url: `api/playlists/${playlistId}/songs/${songId}`,
        playlistId,
        songId
    })
);

export const fetchPlaylistSongs = (playlistId) => (
    $.ajax({
        method: 'GET',
        url: `api/playlists/${playlistId}`
    })
)