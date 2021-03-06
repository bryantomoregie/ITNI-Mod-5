class User < ApplicationRecord 
    has_many :comments
    has_many :posts, through: :comments
    has_many :posts
    has_many :invitations
    has_many :changedminds
    has_many :changedmindcomments, through: :changedminds, source: :comment
    has_many :mademethinks
    has_many :mademethinkcomments, through: :mademethinks, source: :comment
    has_many :follows
    has_many :followedpost, through: :follows, source: :post
    has_secure_password
end

