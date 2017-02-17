import * as APIUtil from '../util/reservation_api_util'

export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";


export const receiveAllMenus = reservations => ({
  type: RECEIVE_ALL_RESERVATIONS,
  reservations
});

export const receiveMenu = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});

export const fetchReservations = () => dispatch => (
  APIUtil.fetchReservations()
  .then(reservations => dispatch(receiveAllReservations(reservations)))
);

export const fetchReservation = id => dispatch => (
  APIUtil.fetchReservation(id)
  .then(reservation => {return dispatch(receiveReservation(reservation))})
);

export const createReservation = (reservation) => dispatch => (
  APIUtil.createReservation(reservation).then(
    reservation => dispatch(receiveReservation(reservation)))
);
