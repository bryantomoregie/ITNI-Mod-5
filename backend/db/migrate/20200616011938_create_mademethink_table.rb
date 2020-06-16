class CreateMademethinkTable < ActiveRecord::Migration[6.0]
  def change
    create_table :mademethinks do |t|
      t.integer :user_id
      t.integer :comment_id
    end
  end
end
