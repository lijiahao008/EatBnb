class CreateMenus < ActiveRecord::Migration[5.0]
  def change
    create_table :menus do |t|
      t.string :title, null: false
      t.integer :price, null: false
      t.text :description, null: false
      t.string :address, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :menus, :price
    add_index :menus, :owner_id
  end
end
