class Api::MenusController < ApplicationController
  before_action :require_logged_in, except: [:index, :show]

  def index
    if params[:top_rated]
      @menus = Menu.order(price: :desc).limit(6)
      render 'api/menus/top_rated'
    end

    if params[:recomended]
      @menus = Menu.order(created_at: :desc).limit(6)
      render 'api/menus/top_rated'
    end

    if bounds
      @menus = Menu.in_bounds(bounds)
    else
      @menus = Menu.all
    end

    if (params[:minPrice] && params[:maxPrice])
      @menus = @menus.where(price: price_range)
    end

    if params[:address]
      @menus = @menus.where("address LIKE ?", "%#{params[:address].downcase}%")
    end

    if params[:my_menus]
      @menus = current_user.menus
    end

  end

  def create
    @menu = Menu.new(menu_params)
    @menu.owner_id = current_user.id

    if @menu.save
      @reviews = []
      @average_rating = 0
      render "api/menus/show"
    else
      render json: @menu.errors.full_messages, status: 422
    end
  end

  def show
    @menu = Menu.includes(:owner, [{reviews: :owner}]).find(params[:id])
    @reviews = @menu.reviews
    unless @reviews.length == 0
      @average_rating = @reviews.map{|review| review.score }.reduce(:+) / @reviews.length
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

  def price_range
    (params[:minPrice]..params[:maxPrice])
  end

  def menu_params
    params.require(:menu).permit(:title, :price, :description, :address, :owner_id)
  end

  def bounds
    params[:bounds]
  end
end
