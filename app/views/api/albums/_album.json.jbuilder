json.album do
  json.extract! album, :id, :title, :year, :genre_id, :artist_id
  json.artist_name album.artist.name
  json.genre album.genre.name

  json.songs do
    album.songs.each do |song|
      # json.partial! 'api/songs/song', song: song
      json.set! song.id do
        json.extract! song, :id, :title, :album_id, :genre_id, :duration 
        json.album song.album.title
      end
    end
  end
end