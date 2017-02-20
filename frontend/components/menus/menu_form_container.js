import { connect } from 'react-redux';
import MenuForm from './menu_form';
import { createMenu, updateMenu } from '../../actions/menu_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    menu: {}
  }
};

const mapDispatchToProps = dispatch => ({
  createMenu: (menu) => dispatch(createMenu(menu)),
  updateMenu: (menu) => dispatch(updateMenu(menu))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuForm);
