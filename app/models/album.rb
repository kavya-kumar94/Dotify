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
