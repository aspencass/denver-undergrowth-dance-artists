class UserResourceSerializer < ActiveModel::Serializer
  attributes :id
  has_one :resource
  has_one :user
end
