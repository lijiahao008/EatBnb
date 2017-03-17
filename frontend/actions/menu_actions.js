import * as APIUtil from '../util/menu_api_util'

export const RECEIVE_ALL_MENUS = "RECEIVE_ALL_MENUS";
export const RECEIVE_MY_MENUS = "RECEIVE_MY_MENUS";
export const RECEIVE_MENU = "RECEIVE_MENU";
export const REMOVE_MENU = "REMOVE_MENU";
export const RECEIVE_TOPRATED_MENUS = "RECEIVE_TOPRATED_MENUS";
export const RECEIVE_RECOMMENDED_MENUS = "RECEIVE_RECOMMENDED_MENUS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveAllMenus = menus => ({
  type: RECEIVE_ALL_MENUS,
  menus
});

export const receiveMyMenus = menus => ({
  type: RECEIVE_MY_MENUS,
  menus
});

export const receiveTopRatedMenus = menus => ({
  type: RECEIVE_TOPRATED_MENUS,
  menus
});

export const receiveRecommendedMenus = menus => ({
  type: RECEIVE_RECOMMENDED_MENUS,
  menus
});

export const receiveMenu = menu => ({
  type: RECEIVE_MENU,
  menu
});

export const removeMenu = menu => ({
  type: REMOVE_MENU,
  menu
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchTopRatedMenus = () => dispatch => (
  APIUtil.fetchTopRatedMenus()
  .then(menus => dispatch(receiveTopRatedMenus(menus)))
);

export const fetchRecommendedMenus = () => dispatch => (
  APIUtil.fetchRecommendedMenus()
  .then(menus => dispatch(receiveRecommendedMenus(menus)))
);

export const fetchMyMenus = () => dispatch => (
  APIUtil.fetchMyMenus()
  .then(menus => dispatch(receiveMyMenus(menus)))
);


export const fetchMenus = (filters) => dispatch => (
  APIUtil.fetchMenus(filters)
  .then(menus => dispatch(receiveAllMenus(menus)))
);

export const fetchMenu = id => dispatch => (
  APIUtil.fetchMenu(id)
  .then(menu => {return dispatch(receiveMenu(menu))})
);

export const deleteMenu = id => dispatch => (
  APIUtil.removeMenu(id)
  .then(menu => {return dispatch(removeMenu(menu))})
);

export const createMenu = (menu) => dispatch => (
  APIUtil.createMenu(menu).then(
    menu => dispatch(receiveMenu(menu)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateMenu = (menu) => dispatch => (
  APIUtil.updateMenu(menu).then(
    menu => dispatch(receiveMenu(menu)))
);
