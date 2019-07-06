class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.integer :genre_id, null: false
      t.timestamps
    end
    add_index :artists, :name
    add_index :artists, :genre_id
  end
end
