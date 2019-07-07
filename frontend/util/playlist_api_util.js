export const fetchPlaylists = (playlists) => {
  return $.ajax({
    method: "GET",
    url: "/api/playlists",
    data: {playlists}
  });
};

export const fetchPlaylist = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/playlists/${id}`
  });
}

export const createPlaylist = (playlist) => {
  return $.ajax({
    method: "POST",
    url: "/api/playlists",
    data: {playlist},
    contentType: false,
    processData: false
  });
}

export const updatePlaylist = (playlist) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/playlists/${playlist.id}`,
    data: {playlist}
  });
}

export const deletePlaylist = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/playlists/${id}`,
  });
}