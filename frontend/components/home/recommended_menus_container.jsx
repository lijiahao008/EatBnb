import { connect } from 'react-redux';
import RecommendedMenus from './recommended_menus';
import { fetchRecommendedMenus } from '../../actions/menu_actions';

const mapStateToProps = state => {
  return {menus: state.menus.recommended_menus}
};

const mapDispatchToProps = dispatch => ({
  fetchRecommendedMenus: () => dispatch(fetchRecommendedMenus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendedMenus);
