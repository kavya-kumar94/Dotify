class Api::AlbumsController < ApplicationController
    def index
        @albums = Album.all

        if @albums
            render :index
        else
            render json: @albums.errors.full_messages, status: 422
        end
    end

    def show
        @album = Album.find(params[:id])
        if @album
            render :show
        else
            render json: ['Album does not exist.'], status: 422
        end
    end

end
