json.set! song.id do 
    json.extract! song, :id, :title, :album_id, :artist_id, :genre_id, :duration  
    # json.id song.id
    # json.title song.title
    json.album song.album.title
    json.artist song.artist.name
    # json.albumCover song.album.cover_image
    # json.audio_url url_for(song.audio)
    # json.artistId song.artist.id
    # json.albumId song.album.id
end