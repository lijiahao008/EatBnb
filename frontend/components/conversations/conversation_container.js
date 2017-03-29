import { connect } from 'react-redux';
import Conversation from './conversation';
import { fetchConversation, markAsRead, replyToConversation } from '../../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => {
  let conversation = state.conversations.current_conversation || {};
  return {
    conversationId: ownProps.id,
    conversation,
    currentUserId: state.session.currentUser.id
}};

const mapDispatchToProps = (dispatch) => ({
  fetchConversation: (id) => dispatch(fetchConversation(id)),
  markAsRead: (id) => dispatch(markAsRead(id)),
  replyToConversation: (message) => dispatch(replyToConversation(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation);
