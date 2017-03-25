class Api::MessagesController < ApplicationController
  before_action :require_logged_in

  def new
    @chosen_recipient = User.find_by(id: params[:to].to_i) if params[:to]
  end

  def create
    recipients = User.where(id: params['recipients'])
    @conversation = current_user.send_message(recipients, params[:message][:body], params[:message][:subject]).conversation
    flash[:success] = "Message has been sent!"
    render 'api/conversations/show'
  end
end
