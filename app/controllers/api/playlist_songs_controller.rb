class Api::PlaylistSongsController < ApplicationController
    def create
        if PlaylistSong.exists?(playlist_id: params[:playlist_id], song_id: params[:song_id])
            render json: ["Song is already in playlist"], status: 401
        else
            @playlist_song = PlaylistSong.create({playlist_id: params[:playlist_id], song_id: params[:song_id]})
            render json: ['Track was added to your playlist.']
        end
    end

    def destroy
        @playlist_song = PlaylistSong.find_by(playlist_id: params[:playlist_id], song_id: params[:song_id])
        @playlist_song.delete
        render `/api/playlist_songs/delete`
    end

    private
    def playlist_song_params
        params.require(:playlist_song).permit(:playlist_id, :song_id)
    end
end
