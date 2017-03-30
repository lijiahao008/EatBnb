import { connect } from 'react-redux';
import NewConversation from './new_conversation';
import { createConversation } from '../../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch) => ({
  createConversation: (conversation) => dispatch(createConversation(conversation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewConversation);
