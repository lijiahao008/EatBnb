class Api::MessagesController < ApplicationController
  before_action :require_logged_in


  def create
    recipients = User.where(id: params['recipients'])
    @conversation = current_user.send_message(recipients, params[:body], params[:subject]).conversation
    debugger
    render 'api/conversations/conversation'
  end
end
