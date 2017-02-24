import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';


class ReservationForm extends React.Component {
  constructor(props){

    super(props)
    this.state={
      date: "",
      menu_id: props.menu.id,
      num_guests: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const reservation = this.state;
    this.props.createReservation({reservation}).then(hashHistory.push('/myReservations'));
  }


  render () {
    return (
        <div className="pull-right reservation-form" >
            <div className="panel panel-default">
              <div className="row title">
                <h4 className="col-xs-6">$ {this.props.menu.price}</h4>
                <h4 className="col-xs-6 pull-right text-right">Per Meal</h4>
              </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                          <label>
                              DATE</label>
                            <div className="input-group">
                              <input type="date" className="form-control"
                              onChange={this.update("date")}
                              required autoFocus />
                          </div>
                      </div>
                    <div className="form-group">
                        <label>
                            NUMBER OF GUEST</label>
                          <div className="input-group">
                            <input type="number" className="form-control"
                            placeholder="3"
                            onChange={this.update("num_guests")}
                            required autoFocus />
                        </div>
                    </div>
                    <div className="form-group">
                      <label>Final Amount</label>
                      <strong className="pull-right">{this.props.menu.price * this.state.num_guests}</strong>
                    </div>
                    <button type="submit" className="btn btn-danger btn-lg btn-block">Reserve</button>
                    </form>
                </div>
            </div>

        </div>


    );
  }
}

export default withRouter(ReservationForm);
