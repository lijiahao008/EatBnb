class User < ApplicationRecord
  attr_reader :password

	validates :email, :password_digest, :session_token, presence: true
	validates :email, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

  has_attached_file :profile_image, default_url: "default-profile.png"
  validates_attachment_content_type :profile_image, content_type: /\Aimage\/.*\z/

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

  has_many :menus,
    foreign_key: :owner_id
  has_many :reservations,
    foreign_key: :owner_id


	def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials email, password
		user = User.find_by(email: email)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end
end
