// export const createPlaylistSong = (playlistsong) => {
//     return $.ajax({
//         method: "POST",
//         url: "/api/playlistsongs",
//         data: { playlistsong }
//     });
// };

// export const deletePlaylistSong = (id) => {
//     return $.ajax({
//         method: "DELETE",
//         url: `/api/playlistsongs/${id}`
//     });
// };

export const addSongToPlaylist = (playlistId, songId) => (
    $.ajax({
        method: 'POST',
        url: `api/playlists/${playlistId}/songs/${songId}`
    })
);