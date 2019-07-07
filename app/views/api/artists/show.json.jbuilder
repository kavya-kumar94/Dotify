json.artist do
  json.extract! @artist, :name, :id, :genre_id
  # json.genre artist.genre.name

  json.albums do
    @artist.albums.each do |album|
      json.set! album.id do
        json.extract! album, :id, :title, :year, :genre_id, :artist_id
        json.artist_name album.artist.name
        json.genre album.genre.name
        # json.partial! 'api/albums/album', album: album
      end
    end
  end

  json.songs do
    @artist.songs.limit(5).each do |song|
      json.set! song.id do
          json.extract! song, :id, :title, :album_id, :genre_id, :duration 
          json.album song.album.title
          json.artist song.artist.name 
        # json.partial! 'api/songs/song', song: song
      end
    end
  end

end

