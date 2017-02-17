import { connect } from 'react-redux';
import RecomendedMenus from './recomended_menus';
import { fetchMenus } from '../../actions/menu_actions';

const mapStateToProps = state => {
  return {
  menus: Object.keys(state.menus).map(id => state.menus[id])
}};

const mapDispatchToProps = dispatch => ({
  fetchMenus: () => dispatch(fetchMenus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecomendedMenus);
