@likes.each do |like|
    json.set! like.id do
        json.likeId like.id
        json.extract! like, :user_id, :song_id
        song = Song.find(like.song_id)
        json.id song.id
        json.extract! song, :title, :duration, :album_id
        if song.audio.attached?
            json.audio url_for(song.audio)
        else
            json.audio ""
        end
        # album = Album.find(song.album_id)
        json.album_title song.album.title
        json.artist_name song.artist.name
        song.album.album_image.attached? ? (json.album_image url_for(song.album.album_image)) : (json.album_image "")
    end
end