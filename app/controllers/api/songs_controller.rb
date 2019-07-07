class Api::SongsController < ApplicationController
  def show
    @song = Song.find(params[:id])
    render :show
  end

  def index
    @songs = Song.all
  end


end
