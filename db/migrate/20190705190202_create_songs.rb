class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :album_id, null: false
      t.integer :genre_id, null: false
      t.integer :duration
      t.timestamps
    end
    add_index :songs, :title
    add_index :songs, :album_id
    add_index :songs, :genre_id
  end
end
