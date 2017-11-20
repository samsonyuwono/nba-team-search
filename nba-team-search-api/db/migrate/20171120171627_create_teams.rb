class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :championships
      t.integer :year_established
      t.string :logo_url

      t.timestamps
    end
  end
end
