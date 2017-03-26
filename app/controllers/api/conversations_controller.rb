class Api::ConversationsController < ApplicationController
  before_action :require_logged_in
  before_action :get_conversation, except: [:index, :empty_trash]


  def index
    @inbox = current_user.mailbox.inbox
    @sentbox = current_user.mailbox.sentbox
    @trash = current_user.mailbox.trash
    render 'api/conversations/index'
  end

  def show
  end

  def mark_as_read
    @conversation.mark_as_read(current_user)
    render 'api/conversations/show'
  end

  def mark_as_unread
    @conversation.mark_as_unread(current_user)
    render 'api/conversations/show'
  end

  def reply
    current_user.reply_to_conversation(@conversation, params[:body])
    render 'api/conversations/show'
  end

  def destroy
    @conversation.move_to_trash(current_user)
    render 'api/conversations/index'
  end

  def restore
    @conversation.untrash(current_user)
    render 'api/conversations/index'
  end

  def empty_trash
    @mailbox.trash.each do |conversation|
      conversation.receipts_for(current_user).update_all(deleted: true)
    end
    render 'api/conversations/index'
  end

  private

  def get_conversation
    @conversation ||= current_user.mailbox.conversations.find(params[:id])
  end

end
