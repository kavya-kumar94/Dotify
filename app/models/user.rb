# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :session_token, :password_digest, :username, presence: true
    validates :session_token, :username, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    attr_reader :password

    has_many :playlistfollowers,
        foreign_key: :follower_id,
        class_name: :PlaylistFollow
    
    has_many :followees,
        foreign_key: :followee_id,
        class_name: :UserFollow

    has_many :userfollowers,
        foreign_key: :follower_id,
        class_name: :UserFollow

    has_many :playlists,
        foreign_key: :creator_id,
        class_name: :Playlist

    has_many :likes,
        foreign_key: :user_id,
        class_name: :Like
    
    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token||=SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
end
