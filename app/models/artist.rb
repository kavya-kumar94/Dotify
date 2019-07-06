class Artist < ApplicationRecord
    validates :name, :genre_id, presence: true

    belongs_to :genre,
        foreign_key: :genre_id,
        class_name: :Genre 
    
    has_many :albums,
        foreign_key: :album_id,
        class_name: :Album

    has_one_attached :artist_image

end
