class CreateDiscussionTable < ActiveRecord::Migration[6.0]
  def change
    create_table :discussions do |t|
      t.string :title 
      t.string :description 
      t.string :public_status
      t.string :image
    end
  end
end
