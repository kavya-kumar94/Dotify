class Api::AlbumsController < ApplicationController
    def index
        @albums = Album.includes(:artist, :songs).with_attached_album_image

        if @albums
            render :index
        else
            render json: @albums.errors.full_messages, status: 422
        end
    end

    def show
        @album = Album.includes(:artist, :songs).with_attached_album_image.find(params[:id])
        if @album
            @songs = @album.songs.with_attached_audio
        else
            render json: ['Album does not exist.'], status: 422
        end
    end

end
