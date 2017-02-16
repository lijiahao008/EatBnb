class CreateReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :reservations do |t|
      t.date :date
      t.boolean :confirmed
      t.integer :owner_id
      t.integer :menu_id

      t.timestamps
    end
  end
end
