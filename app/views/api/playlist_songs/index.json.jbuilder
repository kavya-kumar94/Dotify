json.extract! @playlist_song, :playlist_id, :song_id

json.set! @playlist_song.playlist_id do 
    json.extract! @playlist_song, :playlist_id, :song_id
end


# json.message do
#     json.array! @message
# end