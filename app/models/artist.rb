# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  genre_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
    validates :name, :genre_id, presence: true

    belongs_to :genre,
        foreign_key: :genre_id,
        class_name: :Genre 
    
    has_many :albums,
        foreign_key: :artist_id,
        class_name: :Album

    has_many :songs,
        through: :albums,
        source: :songs
        
    has_one_attached :artist_image

end
