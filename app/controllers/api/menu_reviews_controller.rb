class Api::MenuReviewsController < ApplicationController
  before_action :require_logged_in, except: [:index, :show]
  before_filter :cannot_review_self, only: [:create]

  def create
    @menu_review = MenuReview.new(menu_review_params)
    @menu_review.owner_id = current_user.id
    if @menu_review.save
      @menu = Menu.includes(:owner, [{reviews: :owner}]).find(@menu_review.menu_id)
      @reviews = @menu.reviews || []
      @average_rating = @menu.reviews.map{|review| review.score }.reduce(:+) / @menu.reviews.length
      render "api/menus/show"
    else
      render json: @menu_review.errors.full_messages, status: 422
    end
  end

  def update
    @menu_review = MenuReview.find(params[:id])
    if @menu_review.update(menu_review_params)
      render "api/menu_reviews/show"
    else
      render json: @menu_review.errors.full_messages, status: 422
    end
  end

  private

  def menu_review_params
    params.require(:menu_review).permit(:score, :body, :menu_id)
  end

  def cannot_review_self
    if current_user.id == Menu.find(params[:menu_review][:menu_id]).owner.id
      render json: ["You can not review yourself."], status: 422
    end
  end
end
