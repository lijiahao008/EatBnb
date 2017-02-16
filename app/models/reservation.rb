class Reservation < ApplicationRecord
  validates :date, :owner, :menu, presence: true
  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id

  belongs_to :menu
end
