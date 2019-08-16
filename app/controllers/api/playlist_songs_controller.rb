class Api::PlaylistSongsController < ApplicationController
    def create
        if PlaylistSong.exists?(playlist_id: params[:playlist_id], song_id: params[:song_id])
            render json: ["Song is already in playlist '#{Playlist.find(@playlist_song.playlist_id).name}'"], status: 401
        else
            @playlist_song = PlaylistSong.create({playlist_id: params[:playlist_id], song_id: params[:song_id]})
            render json: ['Track was added to your playlist.']
        end
    end

    def destroy
        @playlist_song = PlaylistSong.find(params[:id])
        @playlist_song.delete
        render `/api/playlists/#{playlist_id}`
    end

    private
    def playlist_song_params
        params.require(:playlist_song).permit(:playlist_id, :song_id)
    end
end
