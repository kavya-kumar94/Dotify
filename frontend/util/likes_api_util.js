export const fetchLikedSongs = () => {
    return $.ajax({
        method: "GET",
        url: "api/likes"
    })
}

export const saveSong = (userId, songId) => {
    return $.ajax({
        method: "POST",
        url: "api/likes",
        data: {
            like: {
                user_id: userId,
                song_id: songId
            }
        }
    })
}

export const unsaveSong = (likedSongId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/likes/${likedSongId}`,
        data: {
            id: likedSongId
        }
    })
}