json.id @conversation.id
json.subject @conversation.subject
json.created_at @conversation.created_at.strftime("%I:%M%p on %m/%d/%Y")
json.updated_at time_ago_in_words(@conversation.updated_at) + " ago"
json.messages do
  @conversation.receipts_for(current_user).each do |receipt|
    message = receipt.message
    json.set! message.id do
      json.sender_image asset_path(message.sender.profile_image.url)
      json.body message.body
      json.created_at time_ago_in_words(message.created_at) + " ago"
    end
  end
end
