class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:update]

  def index
    @users = User.all
    render "api/users/index"
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:user][:id])

    if @user.id == current_user.id && @user.update(user_params)
      session[:session_token] = @user.session_token
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :f_name, :l_name, :host, :description, :profile_image)
  end
end
