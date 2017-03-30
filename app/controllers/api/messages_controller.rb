class Api::MessagesController < ApplicationController
  before_action :require_logged_in


  def create
    recipients = User.where(id: params['recipients'])
    @conversation = current_user.send_message(recipients, params[:message][:body], params[:message][:subject]).conversation
    render 'api/conversations/conversation'
  end
end
