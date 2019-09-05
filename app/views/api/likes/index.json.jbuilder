@likes.each do |like|
    json.set! like.id do
        json.likeId like.id
        json.extract! like, :user_id
        song = Song.find(like.song_id)
        json.id song.id
        json.extract! song, :title, :duration, :artist_id, :album_id
        song.audio_file.attached? ? (json.audio_file url_for(song.audio_file)) : (json.audio_file "")
        album = Album.find(song.album_id)
        json.album album.title
        artist = Artist.find(song.artist_id)
        json.artist album.artist.name
        song.album.album_image.attached? ? (json.album_image url_for(song.album.album_image)) : (json.album_image "")
        end
    end