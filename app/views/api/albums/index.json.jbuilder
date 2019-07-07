@albums.each do |album|
  json.set! album.id do
    json.extract! album, :title, :year, :genre_id, :artist_id, :id
    json.artist_name album.artist.name
    json.genre album.genre.name
    # if album.cover.attached?
    #   json.cover_url album.cover.service_url
    # end
  end
end