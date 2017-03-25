json.inbox do
  @inbox.each do |conversation|
    json.set! conversation.id do
      json.id conversation.id
      json.subject conversation.subject
      json.created_at conversation.created_at.strftime("%I:%M%p on %m/%d/%Y")
      json.updated_at time_ago_in_words(conversation.updated_at) + " ago"
      json.last_message conversation.last_message.body
    end
  end
end

json.sentbox do
  @sentbox.each do |conversation|
    json.set! conversation.id do
      json.id conversation.id
      json.subject conversation.subject
      json.created_at conversation.created_at.strftime("%I:%M%p on %m/%d/%Y")
      json.updated_at time_ago_in_words(conversation.updated_at) + " ago"
      json.last_message conversation.last_message.body
    end
  end
end

json.trash do
  @trash.each do |conversation|
    json.set! conversation.id do
      json.id conversation.id
      json.subject conversation.subject
      json.created_at conversation.created_at.strftime("%I:%M%p on %m/%d/%Y")
      json.updated_at time_ago_in_words(conversation.updated_at) + " ago"
      json.last_message conversation.last_message.body
    end
  end
end
