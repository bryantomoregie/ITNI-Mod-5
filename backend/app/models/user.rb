class User < ApplicationRecord 
    has_many :comments
    has_many :posts, through: :comments
    has_many :posts
    has_many :invitations
    has_many :changedminds
    has_many :comments, through: :changedminds
    has_secure_password
end

