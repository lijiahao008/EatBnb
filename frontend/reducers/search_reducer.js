import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import merge from 'lodash/merge';

const SearchReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, oldState, action.searchResults);
    default:
      return oldState;
  }
};

export default SearchReducer;
