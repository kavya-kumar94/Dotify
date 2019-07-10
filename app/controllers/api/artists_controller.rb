class Api::ArtistsController < ApplicationController
    def index
        @artists = Artist.includes(:albums, :songs).with_attached_artist_image

        if @artists
            render :index
        else
            render json: @artists.errors.full_messages, status: 422
        end
    end

    def show
        @artist = Artist.includes(:albums, :songs).with_attached_artist_image.find(params[:id])

        if @artist
            render :show
        else
            render json: ['Artist does not exist.'], status: 422
        end
    end

end
