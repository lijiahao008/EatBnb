import { connect } from 'react-redux';
import MyMenus from './my_menus';
import { fetchMyMenus } from '../../actions/menu_actions';

const mapStateToProps = (state) => {
  return {menus: state.menus.my_menus}
};

const mapDispatchToProps = dispatch => ({
  fetchMyMenus: () => dispatch(fetchMyMenus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyMenus);
