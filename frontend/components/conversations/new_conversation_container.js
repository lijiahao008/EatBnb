import { connect } from 'react-redux';
import NewConversation from './new_conversation';
import { createConversation } from '../../actions/conversation_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let usersOptions = Object.keys(state.users).map(id => {
    if (state.users[id].name === " ") {
      return {value: state.users[id].id, label: state.users[id].email};
    }
    else {
      return {value: state.users[id].id, label: state.users[id].name};
    }
  }) || [];
  return {usersOptions}
};

const mapDispatchToProps = (dispatch) => ({
  createConversation: (conversation) => dispatch(createConversation(conversation)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewConversation);
