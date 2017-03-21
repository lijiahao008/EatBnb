import { connect } from 'react-redux';
import MyMenus from './my_menus';
import { fetchMyMenus, deleteMenu } from '../../actions/menu_actions';

const mapStateToProps = (state) => {

  return {menus: state.menus.my_menus}
};

const mapDispatchToProps = dispatch => ({
  fetchMyMenus: () => dispatch(fetchMyMenus()),
  deleteMenu: (id) => dispatch(deleteMenu(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyMenus);
