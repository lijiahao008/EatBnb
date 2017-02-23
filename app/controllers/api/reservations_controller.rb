class Api::ReservationsController < ApplicationController
  before_action :require_logged_in

  def index
    @reservations = Reservation.where(owner_id: current_user.id)
  end



  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render "api/reservations/show"
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def show
    @reservation = Reservation.includes(:owner).find(params[:id])
  end

  def update
    if @reservation.update(reservation_params)
      render "api/reservations/show"
    else
      render json: @reservation.errors.full_messages, status: 422
    end

  end

  def destroy

  end

  private

  def reservation_params
    params.require(:reservation).permit(:title, :price, :description, :address, :owner_id)
  end
end
