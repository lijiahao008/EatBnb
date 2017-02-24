import { connect } from 'react-redux';
import { fetchReservations } from '../../actions/reservation_actions';
import myReservations from './my_reservations';

const mapStateToProps = (state) => {
  return {
    reservations: Object.keys(state.reservations).map(id => state.reservations[id])
}};

const mapDispatchToProps = dispatch => ({
  fetchReservations: () => dispatch(fetchReservations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(myReservations);
