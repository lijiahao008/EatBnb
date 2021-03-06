class Menu < ApplicationRecord
  geocoded_by :address
  validates :title, :price, :description, :address, :owner, presence:true
  before_save :downcase_address

  has_attached_file :picture, styles: { medium: "400x300>" }, default_url: "default-menu.jpg"
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\z/
  after_validation :geocode

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id

  has_many :reservations,
    class_name: "Reservation",
    foreign_key: :menu_id,
    dependent: :destroy

  has_many :reviews,
    class_name: "MenuReview",
    foreign_key: :menu_id,
    dependent: :destroy


  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:lat])
        .where("latitude > ?", bounds[:southWest][:lat])
        .where("longitude > ?", bounds[:southWest][:lng])
        .where("longitude < ?", bounds[:northEast][:lng])
  end

  def downcase_address
    self.address.downcase!
  end

  def average_rating
    reviews = self.reviews
    return 0 if reviews.length == 0
    reviews.map{|review| review.score }.reduce(:+) / reviews.length
  end

end
