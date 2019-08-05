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
        json.creator playlist.creator.username 
        if playlist.playlist_image.attached?
            json.playlist_image url_for(playlist.playlist_image)
        else
            json.playlist_image url_for("https://dotify-app-dev.s3-us-west-1.amazonaws.com/emptyplaylist.png")
        end
    end 
end

json.songs do
    playlist.songs.each do |song|
        json.set! song.id do
            json.extract! song, :title, :duration, :album_id, :genre_id
            json.artist_name song.artist.name 
            json.artist_id song.artist.id
            json.album_title song.album.title 
            if song.audio.attached?
                json.audio url_for(song.audio)
            else
                json.audio ""
            end
        end
    end
end 

