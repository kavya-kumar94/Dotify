class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :playlists, :title
    remove_index :playlists, :creator_id
    add_index :playlists, [:title, :creator_id], unique: true
  end
end
