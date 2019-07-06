class Api::SongsController < ApplicationController
  def show
    @song = Song.find(params[:id])
    render :show
  end

  private
  def song_params
    params.require(:song).permit(:title, :album_id, :genre_id, :duration)
  end

end
