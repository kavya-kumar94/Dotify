class CreatePlaylistFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :playlist_follows do |t|
      t.integer :playlist_id, null: false
      t.integer :follower_id, null: false
      t.timestamps
    end
    add_index :playlist_follows, :playlist_id
    add_index :playlist_follows, :follower_id
  end
end
