class CreateResources < ActiveRecord::Migration[7.0]
  def change
    create_table :resources do |t|
      t.string :title
      t.string :description
      t.datetime :date
      t.string :image
      t.string :location_name
      t.string :address
      t.string :email
      t.string :website
      t.string :social
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
