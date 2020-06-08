class CreatePostTable < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :original_post
      t.string :image
      t.integer :user_id
      t.integer :discussion_id
    end
  end
end
