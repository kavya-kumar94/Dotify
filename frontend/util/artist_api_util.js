export const fetchArtists = (artists) => {
    return $.ajax({
        url: `/api/artists`,
        data: { artists }
    });
};

export const fetchArtist = (id) => {
    return $.ajax({
        url: `/api/artists/${id}`
    });
};
