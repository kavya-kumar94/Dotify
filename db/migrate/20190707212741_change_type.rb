class ChangeType < ActiveRecord::Migration[5.2]
  def change
    change_column :songs, :duration, :string
  end
end
