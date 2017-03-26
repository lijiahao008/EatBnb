import { connect } from 'react-redux';
import Conversations from './conversations';
import { fetchConversations, markAsRead, markAsUnRead } from '../../actions/conversation_actions';

const mapStateToProps = state => {
  let inbox = state.conversations.inbox || {};
  let sentbox = state.conversations.sentbox || {};
  let trash = state.conversations.trash || {};
  return {
  inbox: Object.keys(inbox).map(id => state.conversations.inbox[id]),
  sentbox: Object.keys(sentbox).map(id => state.conversations.sentbox[id]),
  trash: Object.keys(trash).map(id => state.conversations.trash[id])

}};

const mapDispatchToProps = dispatch => ({
  fetchConversations: () => dispatch(fetchConversations()),
  markAsRead: (id) => dispatch(markAsRead(id)),
  markAsUnRead: (id) => dispatch(markAsUnRead(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversations);
