class Api::PlaylistSongsController < ApplicationController
    def create
        @playlist_song = PlaylistSong.new(playlist_song_params)
        if PlaylistSong.exists?(playlist_id: @playlist_song.playlist_id, song_id: @playlist_song.song_id)
            render json: ["Song is already in playlist '#{Playlist.find(@playlist_song.playlist_id).name}'"], status: 401
        else
            @playlist_song.save
        end
    end

    def destroy
        @playlist_song = PlaylistSong.find(params[:id])
        @playlist_song.delete
    end

    private
    def playlist_song_params
        params.require(:playlist_song).permit(:playlist_id, :song_id)
    end
end
