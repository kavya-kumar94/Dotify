class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false
      t.timestamps
    end
    add_index :playlists, :title, unique: true
    add_index :playlists, :creator_id, unique: true
  end
end
