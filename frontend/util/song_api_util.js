export const fetchSong = songId => (
    $.ajax({
        method: 'GET',
        url: `api/songs/${songId}`
    })
);


export const fetchSongs = (albumId) => (
    $.ajax({
        method: 'GET',
        url: `/api/albums/${albumId}/songs`
    })
)
