class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :city
      t.string :zip
      t.string :street
      t.belongs_to :property, null: false, foreign_key: true

      t.timestamps
    end
  end
end
