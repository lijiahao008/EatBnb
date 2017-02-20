import { connect } from 'react-redux';
import MenuForm from './menu_form';
import { createMenu } from '../../actions/menu_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    menu: {}
  }
};

const mapDispatchToProps = dispatch => ({
  createMenu: (menu) => dispatch(createMenu(menu))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuForm);
