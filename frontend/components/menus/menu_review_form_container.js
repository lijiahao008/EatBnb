import { connect } from 'react-redux';
import MenuReviewForm from './menu_review_form';
import { createMenuReview } from '../../actions/review_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    menuId: ownProps.menuId
}};

const mapDispatchToProps = dispatch => ({
  createMenuReview: (review) => dispatch(createMenuReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuReviewForm);
