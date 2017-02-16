class Api::MenusController < ApplicationController
  before_action :require_logged_in, except: [:index, :show]

  def index
    @menus = Menu.all.take(6)
  end

  def create
    @menu = Menu.new(menu_params)
    if @menu.save
      render "api/menus/show"
    else
      render json: @menu.errors.full_messages, status: 422
    end
  end

  def show
    @menu = Menu.includes(:owner).find(params[:id])
  end

  def update
    if @menu.update(menu_params)
      render "api/menus/show"
    else
      render json: @menu.errors.full_messages, status: 422
    end

  end

  def destroy

  end

  private

  def menu_params
    params.require(:menu).permit(:title, :price, :description, :address, :owner_id)
  end
end
