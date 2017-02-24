import * as APIUtil from '../util/reservation_api_util'

export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";


export const receiveAllReservations = reservations => ({
  type: RECEIVE_ALL_RESERVATIONS,
  reservations
});

export const fetchReservations = () => dispatch => (
  APIUtil.fetchReservations()
  .then(reservations => dispatch(receiveAllReservations(reservations)))
);

export const createReservation = (reservation) => dispatch => (
  APIUtil.createReservation(reservation).then(
    reservations => dispatch(receiveAllReservations(reservations)))
);
