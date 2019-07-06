class CreateRecentlyPlayeds < ActiveRecord::Migration[5.2]
  def change
    create_table :recently_playeds do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :type, null: false
      t.timestamps
    end
    add_index :recently_playeds, :user_id, unique: true
    add_index :recently_playeds, :type
  end
end
