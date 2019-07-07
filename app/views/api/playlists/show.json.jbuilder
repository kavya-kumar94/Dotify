json.playlist do
  json.extract! @playlist, :id, :title, :creator_id
#   json.id @playlist.id
#   json.title @playlist.title
#   json.creatorId @playlist.creator_id
  json.creatorName @creator.username
  json.playlistSongIds @playlist_song_ids
  json.songCount @playlist_song_ids.size
#   json.imageUrl @playlist.image_url
#   json.firstImage @playlist.songs.empty? ? nil : @playlist.songs.first.album.cover_image
end

  json.songs do
    @playlist.songs.each do |song|
        json.partial! 'api/songs/song', song: song
    #   json.set! song.id do
    #     json.id song.id
    #     json.title song.title
    #     json.album song.album.title
    #     json.artist song.artist.name
    #     json.duration song.duration
    #     json.albumCover song.album.cover_image
        # json.playlistSongId song.playlistsongs.all.select {|playlistsong| @playlist.id === playlistsong.playlist_id}.first ? song.playlistsongs.all.select {|playlistsong| @playlist.id === playlistsong.playlist_id}.first.id : nil
      end
    end
  end
