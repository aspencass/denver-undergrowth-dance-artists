class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :image, :location_name, :address, :city, :state, :zip
  has_one :contact
  has_one :category
end
