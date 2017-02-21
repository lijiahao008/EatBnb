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

  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:lat])
        .where("latitude > ?", bounds[:southWest][:lat])
        .where("longitude > ?", bounds[:southWest][:lng])
        .where("longitude < ?", bounds[:northEast][:lng])
  end

end
