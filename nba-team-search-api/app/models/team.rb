class Team < ApplicationRecord
  has_many :players
  # validates :name, presence: true
  # validates :wins, presence: true
  # validates :losses, length: {is: 4}, allow_blank: false
end
