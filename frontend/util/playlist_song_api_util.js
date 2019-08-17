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

export const addSongToPlaylist = (playlist, songId) => (
    $.ajax({
        method: 'POST',
        url: `api/playlists/${playlist.id}/songs/${songId}`
    })
);

export const removeSongFromPlaylist = (playlistId, songId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/playlists/${playlistId}/songs/${songId}`
    })
);

export const fetchPlaylistSongs = (playlistId) => (
    $.ajax({
        method: 'GET',
        url: `api/playlists/${playlistId}`
    })
)