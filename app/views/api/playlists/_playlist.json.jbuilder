# json.playlist do
#     json.extract! playlist, :title, :creator_id
#     json.playlist_songs do 
#         playlist.songs.each do |song|
#             json.set! song.id do
#                 json.extract! song, :title, :duration, :album_id, :genre_id
#             end
#         end
#     end    
# end

json.playlists do
    json.set! playlist.id do 
        json.extract! playlist, :id, :title, :creator_id
    end 
end

json.songs do
    playlist.songs.each do |song|
        json.set! song.id do
            json.extract! song, :title, :duration, :album_id, :genre_id
        end
    end
end 