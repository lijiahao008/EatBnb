import { RECEIVE_CONVERSATIONS,
         RECEIVE_CONVERSATION,
         RECEIVE_CURRENT_CONVERSATION,
         RECEIVE_MESSAGE,
         MOVE_TO_TRASH,
         EMPTY_TRASH,
         RECEIVE_NEW_CONVERSATION} from '../actions/conversation_actions';
import merge from 'lodash/merge';

const defaultState = {
  inbox: {},
  sentbox: {},
  trash: {}
}

const ConversationsReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      return merge({}, defaultState, action.conversations);
    case RECEIVE_CONVERSATION:
      let id = action.conversation.id;
      if (newState.inbox[id]) {
        delete newState.inbox[id]
        newState.inbox[id] = action.conversation;
        return newState;
      }else if (newState.sentbox[id]) {
        delete newState.sentbox[id]
        newState.sentbox[id] = action.conversation;
        return newState;
      }else if (newState.trash[id]) {
        delete newState.trash[id]
        newState.trash[id] = action.conversation;
        return newState;
      }
      return newState;
    case RECEIVE_NEW_CONVERSATION:
      debugger
      return merge(newState.sentbox, action.conversation);
    case RECEIVE_CURRENT_CONVERSATION:
      delete newState.current_conversation
      return Object.assign(newState, {"current_conversation": action.conversation});
    case EMPTY_TRASH:
      newState.trash = {};
      return newState;
    case MOVE_TO_TRASH:
      let conversation_id = action.conversation.id;
      if (newState.inbox[conversation_id]) {
        delete newState.inbox[conversation_id]
        newState.trash[conversation_id] = action.conversation;
      }
      if (newState.sentbox[conversation_id]) {
        delete newState.sentbox[conversation_id]
        newState.trash[conversation_id] = action.conversation;
      }
      return newState;
    default:
      return oldState;
  }
};

export default ConversationsReducer;
