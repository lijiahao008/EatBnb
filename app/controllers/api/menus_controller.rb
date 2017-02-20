class Api::MenusController < ApplicationController
  before_action :require_logged_in, except: [:index, :show]

  def index
    if params[:top_rated]
      @menus = Menu.order(average_rating: :desc).limit(6)
    else
      @menus = Menu.all.take(6)
    end

  end

  def create
    debugger
    @menu = Menu.new(menu_params)
    @menu.owner_id = current_user.id

    if @menu.save

      render "api/menus/show"
    else
      render json: @menu.errors.full_messages, status: 422
    end
  end

  def show
    @menu = Menu.includes(:owner, :reviews).find(params[:id])
  end

  def update
    if @menu.update(menu_params)
      render "api/menus/show"
    else
      render json: @menu.errors.full_messages, status: 422
    end

  end

  private

  def menu_params
    params.require(:menu).permit(:title, :price, :description, :address, :owner_id)
  end
end
