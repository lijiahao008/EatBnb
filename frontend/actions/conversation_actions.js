import * as APIUtil from '../util/conversation_api_util'

export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";


export const receiveConversations = conversations => ({
  type: RECEIVE_CONVERSATIONS,
  conversations
});

export const receiveConversation = conversation => ({
  type: RECEIVE_CONVERSATION,
  conversation
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const fetchConversations = () => dispatch => (
  APIUtil.fetchConversations().then(
     conversations => dispatch(receiveConversations(conversations)))
);

export const fetchConversation = (id) => dispatch => (
  APIUtil.fetchConversation(id).then(
    conversation => dispatch(receiveConversation(conversation)))
);

export const createMessage = (message) => dispatch => (
  APIUtil.createMessage(message).then(
    message => dispatch(receiveMessage(message)))
);
