class Api::UsersController < ApplicationController

  def index
    render json: User.all
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: { message: user.errors }, status: 400
    end
  end

  def destroy
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

end
