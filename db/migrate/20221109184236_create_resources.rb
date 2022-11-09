class CreateResources < ActiveRecord::Migration[7.0]
  def change
    create_table :resources do |t|
      t.string :title
      t.string :description
      t.date :date
      t.string :image
      t.string :location_name
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.belongs_to :contact, null: false, foreign_key: true
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
