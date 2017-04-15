import * as APIUtil from '../util/reservation_api_util'

export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";


export const receiveAllReservations = reservations => ({
  type: RECEIVE_ALL_RESERVATIONS,
  reservations
});

export const removeReservation = reservation => ({
  type: REMOVE_RESERVATION,
  reservation
});

export const fetchReservations = () => dispatch => (
  APIUtil.fetchReservations()
  .then(reservations => dispatch(receiveAllReservations(reservations)))
);

export const createReservation = (reservation) => dispatch => (
  APIUtil.createReservation(reservation).then(
    reservations => dispatch(receiveAllReservations(reservations)))
);

export const deleteReservation = (id) => dispatch => (
  APIUtil.removeReservation(id).then(
    reservation => dispatch(removeReservation(reservation)))
);
