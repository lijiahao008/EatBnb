import { connect } from 'react-redux';
import MenuReviewForm from './menu_review_form';
import { createMenuReview, receiveMenuReviewErrors } from '../../actions/review_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    menuId: ownProps.menuId,
    errors: state.menus[ownProps.menuId].review_errors,
    currentUser: state.session.currentUser
}};

const mapDispatchToProps = dispatch => (
  {
  createMenuReview: (review) => dispatch(createMenuReview(review)),
  clearErrors: (id) => dispatch(receiveMenuReviewErrors(id, []))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuReviewForm);
