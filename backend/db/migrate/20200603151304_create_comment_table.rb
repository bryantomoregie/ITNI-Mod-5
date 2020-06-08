class CreateCommentTable < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :text
      t.string :stance
      t.string :rating
      t.string :flag
      t.integer :user_id
      t.integer :post_id
    end
  end
end
