export const fetchAlbums = (albums) => {
    return $.ajax({
        url: "/api/albums",
        data: { albums }
    });
};

export const fetchAlbum = (id) => {
    return $.ajax({
        url: `/api/albums/${id}`
    });
};