json.extract! @playlist_song, :playlist_id, :song_id

json.set! @playlist_song.playlist_id do 
    json.extract! @playlist_song, :playlist_id, :song_id
    # json.partial! 'api/songs/song', song: song
    # json.song @playlist_song.song
    if song.audio.attached?
        json.audio url_for(song.audio)
    else
        json.audio ""
    end
end


json.message do
    json.array! @message
end