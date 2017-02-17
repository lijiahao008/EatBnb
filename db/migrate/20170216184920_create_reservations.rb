class CreateReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :reservations do |t|
      t.date :date, null: false
      t.boolean :confirmed, null: false
      t.integer :owner_id, null: false
      t.integer :menu_id, null: false

      t.timestamps
    end
    add_index :reservations, :owner_id
  end
end
