class Song < ApplicationRecord
    validates :title, :album_id, :genre_id, presence: true

    belongs_to :album,
        foreign_key: :album_id,
        class_name: :Album 

    belongs_to :genre,
        foreign_key: :genre_id,
        class_name: :Genre 

    has_one :artist,
        through: :album,
        source: :artist

    has_many :playlist_songs,
        foreign_key: :song_id,
        class_name: :PlaylistSong

    has_many :playlists,
        through: :playlist_songs,
        source: :playlist


    has_one_attached :audio

end
