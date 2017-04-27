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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(filter, updateFilter) {
    return e => {
      this.setState({[filter]: e.values});
      updateFilter(filter, e.values);
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': this.state.address}, (results, status) => {
      let result = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()}
      window.map.setCenter(result);
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
          onChange={(e)=>this.setState({"address": e.currentTarget.value})}/>
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
