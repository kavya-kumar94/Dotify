class Api::PlaylistsController < ApplicationController
    # before_action :require_logged_in

    def create
        @playlist = Playlist.new(playlist_params)
        @playlist.user_id = current_user.id

        if @playlist.save
            current_user.followed_playlists << @playlist 
            render :show
        else 
            render json: ["Unable to create playlist"], status: 401
        end

    end

    
    def show
        @playlist = Playlist.find(params[:id])
    end
    
    def index
        @playlists = Playlist.all
    end
    
    def destroy
        @playlist = Playlist.find(params[:id])
        @playlist.destroy
        @playlists = current_user.followed_playlists
        render :index
    end
    

    def remove_song_from_playlist
        @playlist = Playlist.find(params[:id])

        song_id = params[:song_id]
        @playlist_song = PlaylistSong.find_by(playlist_id: @playlist.id, song_id: song_id)
        PlaylistSong.destroy(@playlist_song.id)
        @playlist = Playlist.find(params[:id])

        render :show
    end
    # def follow
    #     @playlist = Playlist.find(params[:id])
    #     current_user.followed_playlists << @playlist
    #     render :show
    # end

    # def unfollow
    #     @playlist = Playlist.find(params[:id])
    #     @follow = Follow.find_by( playlist_id: @playlist.id,
    #                             follower_id: current_user.id)
    #     @follow.destroy
    #     render :show
    # end


    private
    def playlist_params
        params.require(:playlist).permit(:title)
    end

end
