import { connect } from 'react-redux';
import MenuForm from './menu_form';
import { createMenu, updateMenu, fetchMenu } from '../../actions/menu_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    menu: {}
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  let formType;
  if (location.pathname.includes("menus")) {
    if (location.pathname.includes("new")) {
      formType = "new";
    }
    if (location.pathname.includes("edit")) {
      formType = "edit";
    }
  }
  return {
  createMenu: (menu) => dispatch(createMenu(menu)),
  updateMenu: (menu) => dispatch(updateMenu(menu)),
  fetchMenu: (id) => dispatch(fetchMenu(id)),
  formType
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuForm);
