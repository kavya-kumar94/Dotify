class Api::LikesController < ApplicationController
    def index
        @likes = current_user.likes.all
    end

    def create
        @like = Like.new(like_params)
        if Like.exists?(user_id: @like.user_id, song_id: @like.song_id)
            render json: ["You have already liked this song"], status: 401
        else 
            @like.save!
            render json: ["Song has been added to your library"]
        end
    end

    def destroy
        @like = Like.find(params[:id])
        @like.delete
        render json: ["Song has been removed from your library"]
    end

    def like_params
        params.require(:like).permit(:user_id, :song_id)
    end

end
