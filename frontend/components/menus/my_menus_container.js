import { connect } from 'react-redux';
import MyMenus from './my_menus';
import { fetchMyMenus, deleteMenu } from '../../actions/menu_actions';

const mapStateToProps = (state) => {
  let my_menus = state.menus.my_menus || {};
  let loading = state.loading;
  return {
    loading,
    menus: Object.keys(my_menus).map(id => my_menus[id])}
};

const mapDispatchToProps = dispatch => ({
  fetchMyMenus: () => dispatch(fetchMyMenus()),
  deleteMenu: (id) => dispatch(deleteMenu(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyMenus);
