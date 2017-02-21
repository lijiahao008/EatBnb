class Api::MenuReviewsController < ApplicationController
  before_action :require_logged_in, except: [:index, :show]

  def create
    @menu_review = MenuReview.new(menu_review_params)
    @menu_review.owner_id = current_user.id
    if @menu_review.save
      @menu = @menu_review.menu
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
end
