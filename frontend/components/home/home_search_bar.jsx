import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeSearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: "", address: "New York, US" };
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
				<div className="col-md-12">
					<div className="form-section">
						<div className="row">
								<form>
									<div className="col-md-4">
										<div className="form-group">
											<input type="text" className="form-control" placeholder={this.state.address}
											onChange={this.update("address")}/>
										</div>
									</div>
									<div className="col-md-4 hidden-sm hidden-xs">
										<div className="form-group">
											<div className="input-group">
												<input type="date" className="form-control"
													onChange={this.update("date")}/>
											</div>
										</div>
									</div>

									<div className="col-md-4 text-center hidden-sm hidden-xs">
										<button type="submit" className="btn btn-lg btn-primary">Search</button>
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
