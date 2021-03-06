class MenuReview < ApplicationRecord
  validates :score, inclusion: [1,2,3,4,5], presence: true
  validates :body, length: {maximum: 200}, presence: true
  validates :menu, :owner, presence: true

  belongs_to :menu,
    dependent: :destroy
  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id

end
