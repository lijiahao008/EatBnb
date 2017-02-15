import { connect } from 'react-redux';
import MenuIndex from './menu_index';
import { fetchMenus, createMenu } from '../../actions/menu_actions';

const mapStateToProps = state => ({
  menus: Object.keys(state.menus).map(id => state.menus[id])
});

const mapDispatchToProps = dispatch => ({
  fetchMenus: () => dispatch(fetchMenus()),
  createMenu: menu => dispatch(createMenu(menu))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuIndex);
