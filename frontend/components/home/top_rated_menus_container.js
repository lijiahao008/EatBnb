import { connect } from 'react-redux';
import TopRatedMenus from './top_rated_menus';
import { fetchTopRatedMenus } from '../../actions/menu_actions';

const mapStateToProps = state => {
  return {
  menus: Object.keys(state.menus).map(id => state.menus[id])
}};

const mapDispatchToProps = dispatch => ({
  fetchTopRatedMenus: () => dispatch(fetchTopRatedMenus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopRatedMenus);
