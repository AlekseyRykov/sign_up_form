class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable, :validatable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable

  validates :username, format: { with: /\A[a-zA-Z][a-zA-Z0-9]+\z/,
                                    message: "only allows letters and integers" }
  validates :firstname, :lastname, format: { with: /\A[а-яА-ЯёЁ\s]+\z/,
                                 message: "Допустимы только русские буквы" }, allow_blank: true
  validates :password, length: { minimum: 5 }

  validates :email, format: { with: Devise.email_regexp, message: "invalid email" }
end
