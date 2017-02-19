import { connect } from 'react-redux';
import MenuReviewForm from './menu_review_form';
import { fetchMenu } from '../../actions/menu_actions';

const mapStateToProps = (state,ownProps) => {
  return {
  menu: state.menus[ownProps.params.menuId]
}};

const mapDispatchToProps = dispatch => ({
  fetchMenu: (id) => dispatch(fetchMenu(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuShow);
