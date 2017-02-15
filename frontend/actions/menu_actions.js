import * as APIUtil from '../util/menu_api_util'

export const RECEIVE_ALL_MENUS = "RECEIVE_ALL_MENUS";
export const RECEIVE_MENU = "RECEIVE_MENU";


export const receiveAllMenus = menus => ({
  type: RECEIVE_ALL_MENUS,
  menus
});

export const receiveMenu = menu => ({
  type: RECEIVE_MENU,
  menu
});

export const fetchMenus = () => dispatch => (
  APIUtil.fetchMenus()
  .then(menus => dispatch(receiveAllMenus(menus)))
);

export const fetchMenu = id => dispatch => (
  APIUtil.fetchMenu(id)
  .then(menu => dispatch(receiveMenu(menu)))
);

export const createMenu = (menu) => dispatch => (
  APIUtil.createMenu(menu).then(
    menu => dispatch(receiveMenu(menu)))
);
