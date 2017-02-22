import { UPDATE_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilters = Object.freeze({
  bounds: {},
  minPrice: 1,
  maxPrice: 100,
  address: ""
});

const FiltersReducer = (state = _defaultFilters, action) => {
  Object.freeze(state)
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    return Object.assign({}, state, newFilter);
  } else {
    return state;
  }
};

export default FiltersReducer;
