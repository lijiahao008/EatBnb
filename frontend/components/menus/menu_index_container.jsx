import { connect } from 'react-redux';
import MenuIndex from './menu_index';
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
)(MenuIndex);
