import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const LoadingReducer = (state = {}, action) => {
  Object.freeze(state)
  if (action.type === RECEIVE_SEARCH_RESULTS) {
    return false;
  } else {
    return true;
  }
};

export default LoadingReducer;
