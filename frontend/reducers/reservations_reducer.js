import { RECEIVE_ALL_RESERVATIONS,
         REMOVE_RESERVATION } from '../actions/reservation_actions';
import merge from 'lodash/merge';

const ReservationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_RESERVATIONS:
      return merge({}, action.reservations);
    case REMOVE_RESERVATION:
      let newState = merge({}, oldState);
      delete newState[action.reservation.id]
      return newState
    default:
      return oldState;
  }
};

export default ReservationsReducer;
