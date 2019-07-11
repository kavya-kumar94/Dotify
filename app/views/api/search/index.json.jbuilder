unless @artists.empty?
    json.artists do
        @artists.each do |artist|
            json.set! artist.id do
                json.extract! artist, :id, :name, :genre_id

                    json.artist_image url_for(artist.artist_image)
                json.albumIds artist.albums.pluck(:id)
            end
        end
    end
else
    json.artists do
    end
end


unless @albums.empty?
    json.albums do
        @albums.each do |album|
            json.set! album.id do
                json.extract! album, :id, :title, :artist_id
                json.album_image url_for(album.album_image)
                json.songIds album.songs.pluck(:id)
            end
        end
    end
else
    json.albums do
    end
end

# unless @songs.empty?
#     json.songs do
#         @songs.each do |song|
#             json.set! song.id do
#                 json.extract! song, :id, :title
#             end
#         end
#     end
# else
#     json.songs do
#     end
# end