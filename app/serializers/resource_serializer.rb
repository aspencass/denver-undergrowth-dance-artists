class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :image, :location_name, :address, :email, :website, :social
  has_one :user
  has_one :category



end
