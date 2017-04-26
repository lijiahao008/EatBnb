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

  acts_as_messageable


	def password=(password)
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

  def profile_image_from_url(url)
    self.profile_image = open(url)
  end

  def self.from_omniauth(auth_hash)

    user = User.find_by(uid: auth_hash['uid'], provider: auth_hash['provider'])
    if user
      user
    else
      user = User.new
      user.provider = auth_hash['provider']
      user.uid = auth_hash['uid']
      user.email = auth_hash['info']['email']
      user.password = auth_hash['uid'] + auth_hash['info']['name']
      user.f_name = auth_hash['info']['first_name'] || ""
      user.l_name = auth_hash['info']['last_name'] || ""
      user.profile_image_from_url(auth_hash['info']['image'])
      user.save!
      user
    end
  end

  def name
    "User #{id}"
  end

  def mailboxer_email(object)
    nil
  end

  def unread_messages
    self.mailbox.receipts.where(is_read:false).count
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
