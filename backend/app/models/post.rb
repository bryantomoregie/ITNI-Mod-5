class Post < ApplicationRecord
    has_many :comments
    belongs_to :user
    has_many :users, through: :comments
    belongs_to :discussion

end 