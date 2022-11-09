class User < ApplicationRecord
    has_many :user_resources 
    has_many :resources, through: :user_resources
    
    has_secure_password
end
