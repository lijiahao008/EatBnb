import * as APIUtil from '../util/reservation_api_util'

export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";


export const receiveAllReservations = reservations => ({
  type: RECEIVE_ALL_RESERVATIONS,
  reservations
});

export const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});

export const fetchReservations = (userId) => dispatch => (
  APIUtil.fetchReservations(userId)
  .then(reservations => dispatch(receiveAllReservations(reservations)))
);

export const createReservation = (reservation) => dispatch => (
  APIUtil.createReservation(reservation).then(
    reservation => dispatch(receiveReservation(reservation)))
);
