@albums.each do |album|
  json.set! album.id do
    json.extract! album, :title, :year, :genre_id, :artist_id, :id
    json.artist_name album.artist.name
    json.genre album.genre.name
    if album.album_image.attached?
        json.album_image url_for(album.album_image)
    else
        json.album_image ""
    end
  end
end