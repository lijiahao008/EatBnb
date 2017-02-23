import React from 'react';

class FilterForm extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      minPrice: this.props.minPrice,
      maxPrice: this.props.maxPrice,
      address: this.props.address
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filter, updateFilter) {
    return e => {
      updateFilter(filter, e.currentTarget.value).then(
      this.setState({[filter]: e.currentTarget.value}))};
  }

  render(){
    return (
    <div className="filter-form">
      <div className="row col-md-12">
      <label>Location </label>
      <input
        type="text"
        className="form-control"
        placeholder={this.state.address}
        onChange={this.handleChange('address', this.props.updateFilter)}/>
      </div>
      <div className="row">
        <div className="col-sm-3">
        <label>Minimum Price </label>
        <input
          type="number"
          className="form-control"
          value={this.state.minPrice}
          onChange={this.handleChange('minPrice', this.props.updateFilter)}/>
        </div>
        <div className="col-sm-3">
        <label>Maximum Price </label>
        <input
          type="number"
          className="form-control"
          value={this.state.maxPrice}
          onChange={this.handleChange('maxPrice', this.props.updateFilter)}/>
        </div>
      </div>
    </div>
    )
  }
};

export default FilterForm;
