json.playlists do
    @playlists.each do |playlist|
        json.set! playlist.id do
            jason.extract! playlist, :id, :title, :creator_id
            # json.id playlist.id
            # json.title playlist.title
            # json.creator_id playlist.creator_id
            json.creatorName playlist.creator.username
            json.playlistSongIds playlist.songs.map { |song| song.id }
            json.imageUrl playlist.image_url
            json.firstImage playlist.songs.empty? ? nil : playlist.songs.first.album.cover_image
        end
    end
end
