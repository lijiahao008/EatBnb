class Api::ReservationsController < ApplicationController
  before_action :require_logged_in

  def index
    @reservations = Reservation.where(owner_id: current_user.id).order(created_at: :desc)
  end



  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.owner_id = current_user.id
    if @reservation.save
      @reservations = Reservation.where(owner_id: current_user.id).order(created_at)
      render action: :index
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end


  def update
    if @reservation.update(reservation_params)
      render "api/reservations/show"
    else
      render json: @reservation.errors.full_messages, status: 422
    end

  end


  private

  def reservation_params
    params.require(:reservation).permit(:date, :owner_id, :menu_id)
  end
end
