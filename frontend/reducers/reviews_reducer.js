import { RECEIVE_MENU_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const MenuReviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_MENU_REVIEW:
      return merge({}, oldState, {[action.review.id]: action.review});
    default:
      return oldState;
  }
};

export default MenuReviewsReducer;
