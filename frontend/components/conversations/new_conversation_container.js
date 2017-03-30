import { connect } from 'react-redux';
import NewConversation from './new_conversation';
import { createConversation } from '../../actions/conversation_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let users = state.users;
  return {users}
};

const mapDispatchToProps = (dispatch) => ({
  createConversation: (conversation) => dispatch(createConversation(conversation)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewConversation);
