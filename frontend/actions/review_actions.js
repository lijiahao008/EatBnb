import * as APIUtil from '../util/review_api_util'
import { receiveMenu } from './menu_actions';

export const RECEIVE_MENU_REVIEW_ERRORS = "RECEIVE_MENU_REVEW_ERRORS";


export const receiveMenuReviewErrors = (id, errors) => ({
  type: RECEIVE_MENU_REVIEW_ERRORS,
  errors,
  id
});


export const createMenuReview = (review) => dispatch => {
  return(
  APIUtil.createMenuReview(review).then(
    menu => dispatch(receiveMenu(menu)),
      err => dispatch(receiveMenuReviewErrors(review.menu_review.menu_id, err.responseJSON)))
)};
