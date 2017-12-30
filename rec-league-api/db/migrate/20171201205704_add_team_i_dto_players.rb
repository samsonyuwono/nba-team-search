class AddTeamIDtoPlayers < ActiveRecord::Migration[5.1]
  def change
    add_column :players, :team_id, :integer, default: 1
  end
end
