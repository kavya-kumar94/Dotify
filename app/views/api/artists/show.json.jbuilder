json.artist do
  json.extract! @artist, :name, :id, :genre_id
  # json.genre artist.genre.name

  json.albums do
    @artist.albums.each do |album|
      json.set! album.id do
        json.partial! 'api/albums/album', album: album
      end
    end
  end

end


json.songs do
  @artist.songs.limit(5).each do |song|
    json.partial! 'api/songs/song', song: song
  end
end