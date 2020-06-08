class User < ApplicationRecord 
    has_many :posts
    has_many :comments
    has_many :posts, through: :comments
    has_many :invitations
    # has_many :discussions, through: :posts
    has_secure_password



    #def password=(password)
     #   @password_digest = hash(password)
    #end
end