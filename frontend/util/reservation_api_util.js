export const fetchReservations = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/reservations'
  });
};


export const createReservation = (reservation) => {
  return $.ajax({
    method: 'POST',
    url: '/api/reservations',
    data: reservation
  });
};

export const updateReservation = (reservation) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/reservations/${reservation.id}`,
    data: reservation
  });
};


export const removeReservation = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reservations/${id}`
  });
};
