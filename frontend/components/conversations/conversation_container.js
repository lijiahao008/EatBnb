import { connect } from 'react-redux';
import Conversation from './conversation';
import { fetchConversation, markAsRead } from '../../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => {
  let conversation = state.conversations.current_conversation || {};
  return {
    conversationId: ownProps.params.conversationId,
    conversation
}};

const mapDispatchToProps = (dispatch) => ({
  fetchConversation: (id) => dispatch(fetchConversation(id)),
  markAsRead: (id) => dispatch(markAsRead(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation);
