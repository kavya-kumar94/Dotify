json.extract! @playlist_song, :playlist_id, :song_id

json.set! @playlist_song.playlist_id do 
    json.extract! @playlist_song, :playlist_id, :song_id
    if song.audio.attached?
        json.audio url_for(song.audio)
    else
        json.audio ""
    end
end


# json.message do
#     json.array! @message
# end