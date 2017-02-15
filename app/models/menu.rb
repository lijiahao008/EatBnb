class Menu < ApplicationRecord
  geocoded_by :address
  validates :title, :price, :description, :address, :owner_id, presence:true

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id



  after_validation :geocode

end
