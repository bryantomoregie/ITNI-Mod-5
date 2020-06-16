class Comment < ApplicationRecord 
    belongs_to :post
    belongs_to :user
    has_many :changedminds
    has_many :users, through: :changedminds 
    has_many :mademethinks
    has_many :users, through: :mademethinks 
end 