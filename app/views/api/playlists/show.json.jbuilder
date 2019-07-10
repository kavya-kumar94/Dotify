# json.playlist do
#   json.extract! @playlist, :id, :title, :creator_id
# #   json.id @playlist.id
# #   json.title @playlist.title
# #   json.creatorId @playlist.creator_id
#   json.creatorName @creator.username
#   json.playlistSongIds @playlist_song_ids
#   json.songCount @playlist_song_ids.count
# #   json.imageUrl @playlist.image_url
# #   json.firstImage @playlist.songs.empty? ? nil : @playlist.songs.first.album.cover_image
# end

#   json.songs do
#     @playlist.songs.each do |song|
#       json.extract! song, :id, :title, :album_id, :genre_id, :duration 
#       json.album song.album.title
#       json.artist song.artist.name 
#         # json.partial! 'api/songs/song', song: song
#     #   json.set! song.id do
#     #     json.id song.id
#     #     json.title song.title
#     #     json.album song.album.title
#     #     json.artist song.artist.name
#     #     json.duration song.duration
#     #     json.albumCover song.album.cover_image
#         # json.playlistSongId song.playlistsongs.all.select {|playlistsong| @playlist.id === playlistsong.playlist_id}.first ? song.playlistsongs.all.select {|playlistsong| @playlist.id === playlistsong.playlist_id}.first.id : nil
#     end
#   end
#   # end


# json.playlist do
#     json.extract! @playlist, :id, :title, :creator_id
#     json.creator @playlist.creator.username
#     json.songCount @playlist.playlist_songs.count
#     json.songIds @playlist.playlist_songs.pluck(:id)

# end


# json.songs do
#     @playlist.songs.each do |song|
#       json.extract! song, :id, :title, :album_id, :genre_id, :duration 
#       json.album song.album.title
#       json.artist song.artist.name 
#     end
# end

json.partial! 'api/playlists/playlist', playlist: @playlist
#  if playlist.playlist_image.attached?
#     json.playlist_image url_for(playlist.playlist_image)
# else
#     json.playlist_image ""
# end



# json.users do 
#     json.set! @playlist.creator.id do
#         json.extract! @playlist.creator, :id, :username
#     end
# end