import * as APIUtil from '../util/conversation_api_util'

export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const RECEIVE_CURRENT_CONVERSATION = "RECEIVE_CURRENT_CONVERSATION";
export const MOVE_TO_TRASH = "MOVE_TO_TRASH";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";


export const receiveConversations = conversations => ({
  type: RECEIVE_CONVERSATIONS,
  conversations
});

export const receiveCurrentConversation = conversation => ({
  type: RECEIVE_CURRENT_CONVERSATION,
  conversation
});

export const receiveConversation = conversation => ({
  type: RECEIVE_CONVERSATION,
  conversation
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const movetoTrash = conversation => ({
  type: MOVE_TO_TRASH,
  conversation
});

export const fetchConversations = () => dispatch => (
  APIUtil.fetchConversations().then(
     conversations => dispatch(receiveConversations(conversations)))
);

export const fetchConversation = (id) => dispatch => (
  APIUtil.fetchConversation(id).then(
    conversation => dispatch(receiveCurrentConversation(conversation)))
);

export const markAsRead = (id) => dispatch => (
  APIUtil.markAsRead(id).then(
    conversation => dispatch(receiveConversation(conversation)))
);

export const markAsUnRead = (id) => dispatch => (
  APIUtil.markAsUnRead(id).then(
    conversation => dispatch(receiveConversation(conversation)))
);

export const moveToTrash = (id) => dispatch => (
  APIUtil.moveToTrash(id).then(
    conversation => dispatch(movetoTrash(conversation)))
);

export const restoreConversation = (id) => dispatch => (
  APIUtil.restoreConversation(id).then(
    conversations => dispatch(receiveConversations(conversations)))
);

export const replyToConversation = (message) => dispatch => (
  APIUtil.replyToConversation(message).then(
    conversation => dispatch(receiveCurrentConversation(conversation)))
);

export const createMessage = (message) => dispatch => (
  APIUtil.createMessage(message).then(
    message => dispatch(receiveMessage(message)))
);
