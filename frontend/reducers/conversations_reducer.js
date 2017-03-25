import { RECEIVE_CONVERSATIONS,
         RECEIVE_CONVERSATION,
         RECEIVE_MESSAGE } from '../actions/conversation_actions';
import merge from 'lodash/merge';

const MenusReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      return merge({}, action.conversations);
    case RECEIVE_CONVERSATION:
      delete oldState.current_conversation
      return Object.assign({}, oldState, {"current_conversation": action.conversation});
    case RECEIVE_MESSAGE:
      debugger
      return merge({}, oldState);
    default:
      return oldState;
  }
};

export default MenusReducer;
