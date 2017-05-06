import { UPDATE_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilters = Object.freeze({
  bounds: {},
  priceRange: [1, 500],
  address: ""
});

const FiltersReducer = (state = _defaultFilters, action) => {
  Object.freeze(state)
  if (action.type === UPDATE_FILTER) {
    return Object.assign({}, state, {[action.filter]: action.value});
  } else {
    return state;
  }
};

export default FiltersReducer;
