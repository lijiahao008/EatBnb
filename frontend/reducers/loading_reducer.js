import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { RECEIVE_MY_MENUS } from '../actions/menu_actions';

const LoadingReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type){
    case RECEIVE_SEARCH_RESULTS:
    case RECEIVE_MY_MENUS:
      return false;
    default:
      return true;
  }
};

export default LoadingReducer;
