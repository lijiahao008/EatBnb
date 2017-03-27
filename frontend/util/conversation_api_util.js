export const fetchConversations = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/conversations'
  });
};

export const createMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: message
  });
};

export const replyToConversation = (message) => {
  return $.ajax({
    method: 'POST',
    url: `/api/conversations/${message.conversation_id}/reply`,
    data: message
  });
};

export const restoreConversation = (id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/conversations/${id}/restore`
  });
};

export const markAsRead = (id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/conversations/${id}/mark_as_read`
  });
};

export const markAsUnRead = (id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/conversations/${id}/mark_as_unread`
  });
};

export const moveToTrash = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/conversations/${id}`
  });
};

export const emptyTrash = () => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/conversations/empty_trash`
  });
};

export const fetchConversation = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/conversations/${id}`
  });
};

export const deleteConversation = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/conversations/${id}`
  });
};
