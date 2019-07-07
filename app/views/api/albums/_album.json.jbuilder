json.extract! album, :title, :year, :genre_id, :artist_id, :id
json.artist album.artist.name
json.genre album.genre.name

json.songs do
  album.songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end
end