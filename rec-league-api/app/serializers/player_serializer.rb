class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :height, :weight, :image_url, :team_id, :likes
  has_one :team
end
