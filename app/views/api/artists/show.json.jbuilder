json.artists do
  json.set! @artist.id do
    json.extract! @artist, :name, :id, :genre_id
    if @artist.artist_image.attached?
      json.artist_image url_for(@artist.artist_image)
    else
      json.artist_image ""
    end
  end
  # json.genre artist.genre.name
end

  json.albums do
    @artist.albums.each do |album|
      json.set! album.id do
        json.extract! album, :id, :title, :year, :genre_id, :artist_id
        json.artist_name album.artist.name
        json.genre album.genre.name
        if album.album_image.attached?
          json.album_image url_for(album.album_image)
        else
          json.album_image ""
        end
        # json.partial! 'api/albums/album', album: album
      end
    end
  end

  json.songs do
    @artist.songs.limit(5).each do |song|
      json.set! song.id do
          json.extract! song, :id, :title, :album_id, :genre_id, :duration 
          json.album_title song.album.title
          json.artist_name song.artist.name 
          if song.audio.attached?
              json.audio url_for(song.audio)
          else
              json.audio ""
          end
        # json.partial! 'api/songs/song', song: song
      end
    end
  end


