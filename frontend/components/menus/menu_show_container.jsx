import { connect } from 'react-redux';
import MenuShow from './menu_show';
import { fetchMenu } from '../../actions/menu_actions';

const mapStateToProps = (state,ownProps) => {
  return {
  menu: state.menus[ownProps.params.menuId],
  reviews: Object.keys(state.reviews).map(id => state.reviews[id])
}};

const mapDispatchToProps = dispatch => ({
  fetchMenu: (id) => dispatch(fetchMenu(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuShow);
