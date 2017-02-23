import { connect } from 'react-redux';
import MyMenus from './my_menus';
import { fetchMyMenus } from '../../actions/menu_actions';

const mapStateToProps = (state) => {
  return {
    menus: Object.keys(state.menus).map(id => state.menus[id])
  }
};

const mapDispatchToProps = dispatch => ({
  fetchMyMenus: () => dispatch(fetchMyMenus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyMenus);
