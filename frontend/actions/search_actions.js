import * as APIUtil from '../util/menu_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = (results) => {

  return {
  type: RECEIVE_SEARCH_RESULTS,
  results
}}


export const updateSearchResults = filters => dispatch => {
    return APIUtil.fetchMenus(filters).then(
      results => dispatch(receiveSearchResults(results)))
}
