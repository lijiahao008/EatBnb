import { RECEIVE_ALL_MENUS,
         RECEIVE_TOPRATED_MENUS,
         RECEIVE_RECOMMENDED_MENUS,
         RECEIVE_MENU,
         REMOVE_MENU } from '../actions/menu_actions';
import merge from 'lodash/merge';

const MenusReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_MENUS:
      return merge({}, action.menus);
    case RECEIVE_RECOMMENDED_MENUS:
      return merge({}, oldState, {"recomended_menus": action.menus});
    case RECEIVE_TOPRATED_MENUS:
      return merge({}, oldState, {"top_rated_menus": action.menus});
    case RECEIVE_MENU:
      return merge({}, oldState, {[action.menu.id]: action.menu});
    case REMOVE_MENU:
      let newState = merge({}, oldState);
      delete newState[action.menu.id];
      return newState;
    default:
      return oldState;
  }
};

export default MenusReducer;
