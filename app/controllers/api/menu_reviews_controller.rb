class Api::MenuReviewsController < ApplicationController
  before_action :require_logged_in, except: [:index, :show]

  def index

  end

  def create
    @menu_review = MenuReview.new(menu_review_params)
    if @menu_review.save
      render "api/menus/show/#{@menu_review.menu_id}"
    else
      render json: @menu_review.errors.full_messages, status: 422
    end
  end

  private

  def menu_review_params
    params.require(:menu_review).permit(:score, :body, :menu_id, :owner_id)
  end
end
