class CreateFollowTable < ActiveRecord::Migration[6.0]
  def change
    create_table :follows do |t|
      t.integer :user_id
      t.integer :post_id
    end
  end
end
