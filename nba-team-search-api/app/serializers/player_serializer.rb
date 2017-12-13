class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :height, :weight, :image_url, :team_id
  has_one :team
end
