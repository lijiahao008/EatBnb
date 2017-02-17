class CreateMenuReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :menu_reviews do |t|
      t.integer :score, null: false
      t.text :body, null: false
      t.integer :menu_id, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :menu_reviews, :menu_id
  end
end
