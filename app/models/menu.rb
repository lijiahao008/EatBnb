class Menu < ApplicationRecord
  geocoded_by :address
  validates :title, :price, :description, :address, :owner, presence:true

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id

  has_many :reservations,
    class_name: "Reservation",
    foreign_key: :menu_id

  has_many :reviews,
    class_name: "MenuReview",
    foreign_key: :menu_id



  after_validation :geocode

end
