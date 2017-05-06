import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_actions';
import merge from 'lodash/merge';

const SearchReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, action.results);
    case CLEAR_SEARCH_RESULTS:
      return merge({}, oldState);
    default:
      return oldState;
  }
};

export default SearchReducer;
