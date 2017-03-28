json.id @conversation.id 
json.subject @conversation.subject
json.updated_at time_ago_in_words(@conversation.updated_at) + " ago"
json.last_message @conversation.last_message.body
json.last_message_sender @conversation.last_message.sender.f_name + " " + @conversation.last_message.sender.l_name
json.is_unread @conversation.is_unread?(current_user)
json.trashed @conversation.is_trashed?(current_user)