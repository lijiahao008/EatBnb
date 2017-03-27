import { RECEIVE_CONVERSATIONS,
         RECEIVE_CONVERSATION,
         RECEIVE_CURRENT_CONVERSATION,
         RECEIVE_MESSAGE,
         MOVE_TO_TRASH,
         RESTORE} from '../actions/conversation_actions';
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
      if (oldState.inbox[id]) {
        delete newState.inbox[id]
        newState.inbox[id] = action.conversation;
        return newState;
      }else if (oldState.sentbox[id]) {
        delete newState.sentbox[id]
        newState.sentbox[id] = action.conversation;
        return newState;
      }else if (oldState.trash[id]) {
        delete newState.trash[id]
        newState.trash[id] = action.conversation;
        return newState;
      }
    case RECEIVE_CURRENT_CONVERSATION:
      delete oldState.current_conversation
      return Object.assign({}, oldState, {"current_conversation": action.conversation});
    case MOVE_TO_TRASH:
      let conversation_id = action.conversation.id;
      if (oldState.inbox[conversation_id]) {
        delete newState.inbox[conversation_id]
        newState.trash[conversation_id] = action.conversation;
        return newState;
      }else if (oldState.sentbox[conversation_id]) {
        delete newState.sentbox[conversation_id]
        newState.trash[conversation_id] = action.conversation;
        return newState;
      }
    case RESTORE:
        let new_id = action.conversation.id;
        delete newState.trash[new_id]
        return newState;
    case RECEIVE_MESSAGE:
      debugger
      return merge({}, oldState);
    default:
      return oldState;
  }
};

export default ConversationsReducer;
