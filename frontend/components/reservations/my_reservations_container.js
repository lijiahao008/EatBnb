import { connect } from 'react-redux';
import { fetchReservations, deleteReservation } from '../../actions/reservation_actions';
import myReservations from './my_reservations';

const mapStateToProps = (state) => {
  debugger
  return {
    reservations: Object.keys(state.reservations).map(id => state.reservations[id])
}};

const mapDispatchToProps = dispatch => ({
  fetchReservations: () => dispatch(fetchReservations()),
  deleteReservation: (id) => dispatch(deleteReservation(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(myReservations);
