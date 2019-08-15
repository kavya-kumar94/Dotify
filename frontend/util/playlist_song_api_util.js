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

export const addSongToPlaylist = (data) => (
    $.ajax({
        method: 'POST',
        url: `api/playlists/${playlistId}/songs/${songId}`,
        data: { playlistsong: data }
    })
);

export const fetchPlaylistSongs = (playlistId) => (
    $.ajax({
        method: 'GET',
        url: `api/playlists/${playlistId}`
    })
)