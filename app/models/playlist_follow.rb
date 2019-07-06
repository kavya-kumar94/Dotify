# == Schema Information
#
# Table name: playlist_follows
#
#  id          :bigint           not null, primary key
#  playlist_id :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistFollow < ApplicationRecord
    belongs_to :playlist,
        foreign_key: :playlist_id,
        class_name: :Playlist

    belongs_to :follower,
        foreign_key: :follower_id,
        class_name: :User
end
