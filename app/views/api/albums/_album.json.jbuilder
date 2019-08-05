json.album do
  json.extract! album, :id, :title, :year, :genre_id, :artist_id
  json.artist_name album.artist.name
  json.genre album.genre.name

  if album.album_image.attached?
      json.album_image url_for(album.album_image)
  else
      json.album_image ""
  end

  json.songs do
    album.songs.each do |song|
      json.set! song.id do
        json.extract! song, :id, :title, :album_id, :genre_id, :duration
        json.artist_name song.artist.name 
        json.artist_id song.artist.id
        json.album song.album.title
        if song.audio.attached?
            json.audio url_for(song.audio)
        else
            json.audio ""
        end
      end
    end
  end
end