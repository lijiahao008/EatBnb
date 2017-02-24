import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';


class ReservationForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      date: "",
      menu_id: this.props.menuId
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
    this.props.createReservation({reservation}).then(this.setState({date: ""}));
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

                    <form>
                      <div className="form-group">
                          <label>
                              DATE</label>
                            <div className="input-group">
                              <input type="date" className="form-control"
                                  required autofocus />
                          </div>
                      </div>
                    <div className="form-group">
                        <label>
                            NUMBER OF GUEST</label>
                          <div className="input-group">
                            <input type="number" className="form-control"
                            placeholder="3"
                                required autofocus />
                        </div>
                    </div>
                    <div className="form-group">
                      <label>Final Amount</label>
                      <strong className="pull-right">{this.props.menu.price}</strong>
                    </div>
                    </form>
                </div>
                <div>
                  <a className="btn btn-danger btn-lg btn-block" role="button">Reserve</a>
                </div>
            </div>

        </div>


    );
  }
}

export default withRouter(ReservationForm);
