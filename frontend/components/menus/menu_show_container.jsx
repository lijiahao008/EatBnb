import { connect } from 'react-redux';
import MenuShow from './menu_show';
import { fetchMenu } from '../../actions/menu_actions';
import { updateMenuReview, deleteMenuReview } from '../../actions/review_actions';
const mapStateToProps = (state,ownProps) => {
  return {
  menu: state.menus[ownProps.params.menuId],
  currentUserId: state.session.currentUser.id
}};

const mapDispatchToProps = dispatch => ({
  fetchMenu: (id) => dispatch(fetchMenu(id)),
  updateMenuReview: (review) => dispatch(updateMenuReview(review)),
  deleteMenuReview: (id) => dispatch(deleteMenuReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuShow);
