# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
    validates :title, :creator_id, presence: true
    belongs_to :user,
        foreign_key: :creator_id,
        class_name: :User
    
    has_many :follows,
        foreign_key: :playlist_id,
        class_name: :PlaylistFollow

    has_many :followers,
        through: :follows,
        source: :follower

    has_many :playlist_songs,
        foreign_key: :playlist_id,
        class_name: :PlaylistSong

    has_one_attached :playlist_image
    
end
