json.albums do
  json.set! @album.id do 
    json.extract! @album, :title, :year, :genre_id, :artist_id, :id
    json.artist_name @album.artist.name
    json.genre @album.genre.name
    if @album.album_image.attached?
        json.album_image url_for(@album.album_image)
    else
        json.album_image ""
    end
  end
end

  json.songs do
    @album.songs.each do |song|
      json.set! song.id do
        json.extract! song, :id, :title, :album_id, :genre_id, :duration 
        json.album song.album.title
        json.artist song.artist.name 
        if song.audio.attached?
            json.audio url_for(song.audio)
        else
            json.audio ""
        end
        # json.partial! 'api/songs/song', song: song
      end
    end
  end
