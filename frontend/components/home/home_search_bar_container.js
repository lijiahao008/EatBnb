import { connect } from 'react-redux';
import HomeSearchBar from './home_search_bar';
import { fetchMenus } from '../../actions/menu_actions';
import { updateSearchResults } from '../../actions/search_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => {
  return {
  menus: Object.keys(state.menus).map(id => state.menus[id])
}};

const mapDispatchToProps = dispatch => ({
  fetchMenus: (data) => dispatch(fetchMenus(data)),
  updateSearchResults: (filters) => dispatch(updateSearchResults(filters)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSearchBar);
