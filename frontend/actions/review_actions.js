import * as APIUtil from '../util/review_api_util'
import { receiveMenu } from './menu_actions';

export const RECEIVE_MENU_REVIEW = "RECEIVE_MENU_REVIEW";



export const receiveMenuReview = review => {
  return {
    type: RECEIVE_MENU_REVIEW,
    review
  }

};


export const createMenuReview = (review) => dispatch => (
  APIUtil.createMenuReview(review).then(
    menu => {return dispatch(receiveMenu(menu))})
);
