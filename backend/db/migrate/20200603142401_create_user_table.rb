class CreateUserTable < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest 
      t.string :image
      t.boolean :verified, default: false
      t.string :one_line_credential
      t.string :biographical_description
    end
  end
end
