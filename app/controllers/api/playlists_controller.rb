class Api::PlaylistsController < ApplicationController
    def create
        @playlist = Playlist.new
        render :new
    end

    def show
        @playlist = Playlist.find(params[:id])
    end

    def index
        @playlists = Playlist.all
        render :index
    end

    def update
        
    end

    def destroy
    end

    private
    def playlist_params
        params.require(:playlist).permit(:title)
    end

end
