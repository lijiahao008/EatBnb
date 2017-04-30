import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class ReservationForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      date: null,
      menu_id: props.menuId,
      menu_price: props.menuPrice,
      num_guests: 0,
      confirmed: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      let date = this.state.date ? this.state.date.format() : null;
      const reservation = {
        date,
        menu_id: this.state.menu_id,
        menu_price: this.state.menu_price,
        num_guests: this.state.num_guests,
        confirmed: this.state.confirmed
      };
      this.props.createReservation({reservation}).then(hashHistory.push('/myReservations'));
    }
    else {
      document.getElementById("log-in-button").click();
    }
  }


  render () {
    return (
        <div className="pull-right reservation-form" id="reservation-form">
            <div className="panel panel-default">
              <div className="row title">
                <h4 className="col-xs-6">$ {this.state.menu_price}</h4>
                <h4 className="col-xs-6 pull-right text-right">Per Meal</h4>
              </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                          <label>DATE</label>
                            <div className="input-group">
                              <SingleDatePicker
            									  date={this.state.date}
                                showClearDate={true}
                                required={true}
                                numberOfMonths={1}
            									  onDateChange={
            											date => this.setState({ date })}
            									  focused={this.state.focused}
            									  onFocusChange={
            											({ focused }) => this.setState({ focused })}
            									/>
                          </div>
                      </div>
                    <div className="form-group">
                        <label>
                            NUMBER OF GUEST</label>
                          <div className="input-group">
                            <input type="number" className="form-control"
                            placeholder="Ex. 2"
                            onChange={this.update("num_guests")}
                            required autoFocus />
                        </div>
                    </div>
                    <div className="form-group">
                      <label>Final Amount</label>
                      <strong className="pull-right">{this.state.menu_price * this.state.num_guests}</strong>
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
