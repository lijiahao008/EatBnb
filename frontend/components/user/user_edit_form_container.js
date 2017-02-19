import { connect } from 'react-redux';
import { editUser } from '../../actions/user_actions';
import UserEditForm from './user_edit_form';

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser
  }
};

const mapDispatchToProps = dispatch => ({
  editUser: (user) => dispatch(editUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEditForm);
