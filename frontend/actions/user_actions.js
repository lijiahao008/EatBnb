import * as APIUtil from '../util/user_api_util'
import { receiveCurrentUser } from './session_actions'

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";


export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers().then(
    users => dispatch(receiveUsers(users)))
);

export const editUser = (user) => dispatch => (
  APIUtil.editUser(user).then(
    user => dispatch(receiveCurrentUser(user)))
);
