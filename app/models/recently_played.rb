# == Schema Information
#
# Table name: recently_playeds
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class RecentlyPlayed < ApplicationRecord
    
end
