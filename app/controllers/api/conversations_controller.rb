class Api::ConversationsController < ApplicationController
  before_action :require_logged_in
  before_action :get_conversation, except: [:index, :empty_trash]


  def index
    @mailbox = current_user.mailbox
    render 'api/conversations/index'
  end

  def show
  end

  def mark_as_read
    @conversation.mark_as_read(current_user)
    render 'api/conversations/conversation'
  end

  def mark_as_unread
    @conversation.mark_as_unread(current_user)
    render 'api/conversations/conversation'
  end

  def reply
    current_user.reply_to_conversation(@conversation, params[:body])
    render 'api/conversations/show'
  end

  def destroy
    @conversation.move_to_trash(current_user)
    render 'api/conversations/conversation'
  end

  def restore
    @conversation.untrash(current_user)
    @mailbox = current_user.mailbox
    render 'api/conversations/index'
  end

  def empty_trash
    @mailbox = current_user.mailbox
    @mailbox.trash.each do |conversation|
      conversation.receipts_for(current_user).update_all(deleted: true)
    end
    render json: ['Successful empty the trash.'], status: 200
  end

  private

  def get_conversation
    @conversation ||= current_user.mailbox.conversations.find(params[:id])
  end

end
