import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => {
  let unreadMessages = session.currentUser ? session.currentUser.unread_messages : 0;
  return {
    currentUser: session.currentUser,
    unreadMessages
  }};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
