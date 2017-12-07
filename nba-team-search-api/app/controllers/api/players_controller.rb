class Api::PlayersController < ApplicationController

  def index
    render json: Player.all
  end

  def create
    player = Player.new(player_params)
    if player.save
      render json: player
    else
      render json: { message: player.errors }, status: 400
    end
  end

  def show
    render json: @player
  end

  def update
    if @player.update(player_params)
      render json: @player
    else
      render json: { message: @player.errors }, status: 400
    end
  end

  private

  def player_params
    params.require(:player).permit(:name, :height, :weight, :image_url, :team_id)
  end
end
