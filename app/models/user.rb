class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable, :validatable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable

  validates :username, presence: true, format: { with: /\A[a-zA-Z][a-zA-Z0-9]+\z/,
                                     message: "only allows latin letters and numbers" }
  validates :firstname, :lastname, presence: true, format: { with: /\A[а-яА-ЯёЁ\s]+\z/,
                                 message: "only allows cyrillic letter" }
  validates :email, presence: true, format: { with: Devise.email_regexp, message: "invalid email" }

  validates :password, presence: true, length: { minimum: 5 }
end
