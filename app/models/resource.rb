class Resource < ApplicationRecord
  belongs_to :contact
  belongs_to :category
  has_many :user_resources 
  has_many :users, through: :user_resources
end
