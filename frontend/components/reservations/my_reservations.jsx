import React from 'react';
import { Link, hashHistory } from 'react-router';
import Infinite from 'react-infinite';


class myReservations extends React.Component {

  componentDidMount(){
    this.props.fetchReservations();
  }

  render () {
    if (!this.props.reservations) {
      return (<div>fetching</div>)
    }

    return (
    <div className="container my-listings">
        <div className="row">
    		<div className="well">
            <h1 className="text-center">My Reservations</h1>
            <div className="list-group">
              <Infinite containerHeight={800} elementHeight={150}>
              {this.props.reservations.map(reservation => {
                const confirmed_text = reservation.confirmed ? "Reservation has already been confirmed" : "Reservation has not been confirmed yet."
                return (
                <Link key={reservation.id} className="list-group-item">
                  <div className="col-md-3">
                    <figure className="pull-left">
                      <img className="media-object img-circle img-responsive reservation-menu-owner-pic"  src={reservation.menu_owner_profile_pic} />
                    </figure>
                  </div>
                  <div className="col-md-6">
                      <h4 className="list-group-item-heading">Reservations for: {reservation.date}</h4>
                      <h4 className="list-group-item-heading">{reservation.menu_name}</h4>
                      <p className="list-group-item-text">{reservation.menu_description}
                      </p>
                  </div>
                  <div className="col-md-3 text-center">
                    <button className="btn btn-danger btn-lg btn-block" onClick={() => this.props.deleteReservation(reservation.id)}> Cancel </button>
                    <h3>{confirmed_text}</h3>
                    <h4>Updated: {reservation.created_at}</h4>
                  </div>
                </Link>
            )
          })
        }
      </Infinite>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

export default myReservations;
