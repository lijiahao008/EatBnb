import { connect } from 'react-redux';
import MenuReviewForm from './menu_review_form';
import { createMenuReview, updateMenuReview, deleteMenuReview, receiveMenuReviewErrors } from '../../actions/review_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    menuId: ownProps.menuId,
    errors: state.menus[ownProps.menuId].review_errors,
    currentUser: state.session.currentUser
}};

const mapDispatchToProps = dispatch => (
  {
  createMenuReview: (review) => dispatch(createMenuReview(review)),
  updateMenuReview: (review) => dispatch(updateMenuReview(review)),
  deleteMenuReview: (id) => dispatch(deleteMenuReview(id)),
  clearErrors: (id) => dispatch(receiveMenuReviewErrors(id, []))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuReviewForm);
