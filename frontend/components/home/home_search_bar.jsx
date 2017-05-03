import React from 'react';
import { Link, withRouter } from 'react-router';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class HomeSearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = Object.assign(
			{ date: null, address: "New York, US", focused: false },
			this.props.filters
		);

		this.autoComplete = this.autoComplete.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => {
			this.setState({[field]: e.currentTarget.value});
			this.props.updateFilter([field], e.currentTarget.value)
		}
	}

	componentDidMount(){
		this.autoComplete();
	}

	autoComplete(){
		let addressInput = document.getElementById('address-input');
    let autocomplete = new google.maps.places.Autocomplete(addressInput);
		autocomplete.addListener('place_changed', ()=>
		this.setState({address: autocomplete.getPlace().formatted_address}));
	}

	handleSubmit(e) {
		e.preventDefault();
		let date = this.state.date ? this.state.date.format() : null;
		let filters = {
			date,
			address: this.state.address
		}
		filters = Object.assign(filters, this.props.filters)
		this.props.updateSearchResults(filters).then(this.props.router.push('/search'))
	}


	render() {

		return (
				<div className="row form-section">
						<form onSubmit={this.handleSubmit}>
								<div className="col-md-4">
									<label>Where</label>
									<div className="search-address">
										<input type="text" id="address-input" placeholder="Ex. New York"
											onChange={this.update("address")}/>
										<i className="hidden-lg hidden-md fa fa-search" onClick={this.handleSubmit}></i>
									</div>
								</div>
								<div className="col-md-4 hidden-sm hidden-xs">
									<div><label>When</label></div>
									<SingleDatePicker
									  date={this.state.date}
										showClearDate={true}
										numberOfMonths={1}
									  onDateChange={
											date => this.setState({ date })}
									  focused={this.state.focused}
									  onFocusChange={
											({ focused }) => this.setState({ focused })}
									/>
								</div>
								<div className="col-md-4 hidden-sm hidden-xs">
									<button onClick={this.handleSubmit} className="btn btn-lg btn-danger search-btn">Search</button>
								</div>
						</form>
					</div>

		);
	}

}

export default withRouter(HomeSearchBar);
