import React from 'react';
import Rheostat from 'rheostat';

class FilterForm extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      priceRange: [this.props.minPrice, this.props.maxPrice],
      address: this.props.address
    }
    this.handleChange = this.handleChange.bind(this);
		this.setUpAutoComplete = this.setUpAutoComplete.bind(this);			this.handleAutoComplete = this.handleAutoComplete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(filter, updateFilter) {
    return e => {
      this.setState({[filter]: e.values});
      updateFilter(filter, e.values);
    };
  }

  componentDidMount(){
    this.setUpAutoComplete();
  }

  handleAutoComplete(){
    this.setState({address: this.autoComplete.getPlace().formatted_address});
    this.props.updateFilter("address", this.state.address);
    this.handleSubmit();
  }

  setUpAutoComplete(){
    const addressInput = document.getElementById('address-input');
    this.autoComplete = new google.maps.places.Autocomplete(addressInput);
    this.autoComplete.addListener('place_changed', this.handleAutoComplete);
  }

  handleSubmit(){
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': this.state.address}, (results, status) => {
      let result = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()}
      window.map.setCenter(result);
      window.map.fitBounds(results[0].geometry.viewport);
    });
  }

  render(){
    return (
    <div className="filter-form">
      <div className="row col-md-12 filter-form-location">
        <label>Location </label>
        <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder={this.state.address}
          id="address-input"/>
        </form>
      </div>
      <div className="row col-md-12 filter-form-price-range">
        <label>Price Range </label>
        <div className="row price-range">
          <Rheostat
            min={this.props.minPrice}
            max={this.props.maxPrice}
            values={[this.state.priceRange[0], this.state.priceRange[1]]}
            onChange={this.handleChange('priceRange', this.props.updateFilter)}
            onValuesUpdated={(e) => this.setState({priceRange: e.values})}
          />
        </div>
        <div className="price-tag">
          <div className="min-price">
            $ {this.state.priceRange[0]}
          </div>
          <div className="max-price">
            $ {this.state.priceRange[1]}
          </div>
        </div>
      </div>
    </div>
    )
  }
};

export default FilterForm;
