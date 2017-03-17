import { RECEIVE_ALL_MENUS,
         RECEIVE_MY_MENUS,
         RECEIVE_TOPRATED_MENUS,
         RECEIVE_RECOMMENDED_MENUS,
         RECEIVE_MENU,
         REMOVE_MENU,
         RECEIVE_ERRORS } from '../actions/menu_actions';
import merge from 'lodash/merge';

const MenusReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_MENUS:
      return merge({}, action.menus);
    case RECEIVE_RECOMMENDED_MENUS:
      return merge({}, oldState, {"recommended_menus": action.menus});
    case RECEIVE_TOPRATED_MENUS:
      return merge({}, oldState, {"top_rated_menus": action.menus});
    case RECEIVE_MY_MENUS:
      return merge({}, oldState, {"my_menus": action.menus});
    case RECEIVE_MENU:
      return merge({}, oldState, {[action.menu.id]: action.menu});
    case REMOVE_MENU:
      let newState = merge({}, oldState);
      let index = newState.my_menus.indexOf(action.menu);
      newState.my_menus.splice(index, 1);
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, {
        errors
      });
    default:
      return oldState;
  }
};

export default MenusReducer;
