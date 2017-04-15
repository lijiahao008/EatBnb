class Api::ReservationsController < ApplicationController
  before_action :require_logged_in

  def index
    @reservations = Reservation.includes([{menu: :owner}]).where(owner_id: current_user.id).order(created_at: :desc)
  end

  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.owner_id = current_user.id
    if @reservation.save
      @reservations = Reservation.where(owner_id: current_user.id).order(created_at: :desc)
      render "api/reservations/index"
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end


  def update
    @reservation = Reservation.find(params[:id])
    if @reservation.update(reservation_params)
      render "api/reservations/show"
    else
      render json: @reservation.errors.full_messages, status: 422
    end

  end

  def destroy
    @reservation = Reservation.find(params[:id])
    if @reservation.delete
      render "api/reservations/show"
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end


  private

  def reservation_params
    params.require(:reservation).permit(:date, :confirmed, :owner_id, :menu_id)
  end
end
