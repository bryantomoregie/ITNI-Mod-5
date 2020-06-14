class CreateChangedmindTable < ActiveRecord::Migration[6.0]
  def change
    create_table :changedminds do |t|
      t.string :text
      t.string :stance
      t.integer :changed_mind
      t.integer :made_me_think
      t.integer :flag
      t.integer :user_id
      t.integer :comment_id
    end
  end
end
