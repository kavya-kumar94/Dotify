json.partial! 'api/songs/song', song: @song
# if song.audio.attached?
#     json.audio url_for(song.audio)
# else
#     json.audio ""
# end