import * as APIUtil from '../util/user_api_util'

export const RECEIVE_USER = "RECEIVE_USER";


export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});



export const editUser = (user) => dispatch => (
  APIUtil.editUser(user).then(
    user => dispatch(receiveUser(user)))
);
