# json.playlists do
    @playlists.each do |playlist|
        json.set! playlist.id do
            json.extract! playlist, :id, :title, :creator_id
            # json.id playlist.id
            # json.title playlist.title
            # json.creator_id playlist.creator_id
            json.creatorName playlist.creator.username
            json.playlistSongIds playlist.playlist_songs.map { |playlist_song| playlist_song.id }
             if playlist.playlist_image.attached?
                json.playlist_image url_for(playlist.playlist_image)
            else
                json.playlist_image url_for("https://dotify-app-dev.s3-us-west-1.amazonaws.com/emptyplaylist.png") 
            end
            # json.imageUrl playlist.image_url
            # json.firstImage playlist.songs.empty? ? nil : playlist.songs.first.album.cover_image
        end
    end
# end
