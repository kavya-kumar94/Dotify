# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  genre_id   :integer          not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
    validates :title, :genre_id, :artist_id, presence: true

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :Artist 

    has_many :songs,
        foreign_key: :album_id,
        class_name: :Song 

    belongs_to :genre,
        foreign_key: :genre_id,
        class_name: :Genre

    has_one_attached :album_image

end
