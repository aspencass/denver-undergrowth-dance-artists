class Resource < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :favorites 
  has_many :users, through: :favorites
  
end
