class CreateUserFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :user_follows do |t|
      t.integer :follower_id, null: false
      t.integer :followee_id, null: false
      t.timestamps
    end
    add_index :user_follows, :follower_id
    add_index :user_follows, :followee_id
  end
end
