class User < ApplicationRecord
    has_many :favorites
    has_many :resources, through: :favorites
    
    has_secure_password
end
