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


		);
	}

}

export default withRouter(HomeSearchBar);
