import {
  RECEIVE_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  users: {}
});

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_USERS:
      return merge({}, action.users);
    default:
      return state;
  }
};

export default UserReducer;
