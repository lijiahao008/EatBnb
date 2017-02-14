class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :f_name, null: false, default: ""
      t.string :l_name, null: false, default: ""
      t.string :profile_image_url, null: false, default: ""
      t.text :description, null: false, default: ""
      t.boolean :host, null: false, default: false

      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end
