class PlaylistFollow < ApplicationRecord
    belongs_to :playlist,
        foreign_key: :playlist_id,
        class_name: :Playlist

    belongs_to :follower,
        foreign_key: :follower_id,
        class_name: :User
end
