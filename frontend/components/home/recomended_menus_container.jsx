import { connect } from 'react-redux';
import RecomendedMenus from './recomended_menus';
import { fetchRecommendedMenus } from '../../actions/menu_actions';

const mapStateToProps = state => {
  return {menus: state.menus.recomended_menus}
};

const mapDispatchToProps = dispatch => ({
  fetchRecommendedMenus: () => dispatch(fetchRecommendedMenus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecomendedMenus);
