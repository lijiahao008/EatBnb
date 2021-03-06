import { connect } from 'react-redux';
import { createReservation } from '../../actions/reservation_actions';
import ReservationForm from './reservation_form';

const mapStateToProps = (state, ownProps) => {
  return {
    menuId: ownProps.menuId,
    menuPrice: ownProps.menuPrice,
    currentUser: state.session.currentUser
}};

const mapDispatchToProps = dispatch => ({
  createReservation: (reservation) => dispatch(createReservation(reservation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationForm);
