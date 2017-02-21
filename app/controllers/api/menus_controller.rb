class Api::MenusController < ApplicationController
  before_action :require_logged_in, except: [:index, :show]

  def index
    if params[:top_rated]
      @menus = Menu.order(average_rating: :desc).limit(6)
    else
      @menus = Menu.all
    end

  end

  def create
    @menu = Menu.new(menu_params)
    @menu.owner_id = current_user.id

    if @menu.save
      render "api/menus/show"
    else
      render json: @menu.errors.full_messages, status: 422
    end
  end

  def show
    @menu = Menu.includes(:owner, [{reviews: :owner}]).find(params[:id])
    unless @menu.reviews.length == 0
      @average_rating = @menu.reviews.map{|review| review.score }.reduce(:+) / @menu.reviews.length
    else
      @average_rating = 0
    end
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
