
import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filter_actions';

import Search from './search';

const mapStateToProps = state => ({
  menus: Object.keys(state.menus).map(id => state.menus[id]),
  minPrice: state.filters.minPrice,
  maxPrice: state.filters.maxPrice
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
