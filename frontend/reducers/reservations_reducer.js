import { RECEIVE_ALL_RESERVATIONS,
         RECEIVE_RESERVATION } from '../actions/reservation_actions';
import merge from 'lodash/merge';

const ReservationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_RESERVATIONS:
      return merge({}, action.reservations);
    default:
      return oldState;
  }
};

export default ReservationsReducer;
