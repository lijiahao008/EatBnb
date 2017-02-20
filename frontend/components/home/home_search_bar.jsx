import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeSearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: "", location: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {

		return (
			<div className="search">
		<div className="container">
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<div className="form-section">
						<div className="row">
								<form role="form">
									<div className="col-md-4">
										<div className="form-group">
											<label className="sr-only">Location</label>
											<input type="email" className="form-control" id="location" placeholder="Where ?" />
										</div>
									</div>
									<div className="col-md-2">
										<div className="form-group">
											<label className="sr-only">Check in</label>
											<div className="input-group">
												<input type="text" className="form-control" id="checkin" placeholder="Check in" />
												<span className="input-group-addon"><i className="glyphicon glyphicon-calendar" ></i></span>
											</div>
										</div>
									</div>
									<div className="col-md-2">
										<div className="form-group">
											<label className="sr-only">Check out</label>
											<div className="input-group">
												<input type="text" className="form-control" id="checkout" placeholder="Check out" />
												<span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
											</div>
										</div>
									</div>
									<div className="col-md-2">
										<div className="form-group">
											<label className="sr-only">Guest</label>
											<select id="guest" name="guest" className="form-control">
													<option value="1">1 Guest</option>
													<option value="2">2 Guests</option>
													<option value="3">3 Guests</option>
													<option value="4">4 Guests</option>
													<option value="5">5 Guests</option>
													<option value="6">6 Guests</option>
													<option value="7">7 Guests</option>
													<option value="8">8 Guests</option>
													<option value="9">9 Guests</option>
													<option value="10">10 Guests</option>
													<option value="11">11 Guests</option>
													<option value="12">12 Guests</option>
													<option value="13">13 Guests</option>
													<option value="14">14 Guests</option>
													<option value="15">15 Guests</option>
													<option value="16">16+ Guests</option>
											</select>
										</div>
									</div>
									<div className="col-md-2">
										<button type="submit" className="btn btn-default btn-primary">Search</button>
									</div>
								</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

		);
	}

}

export default withRouter(HomeSearchBar);
