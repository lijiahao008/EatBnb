import React from 'react';



class FilterForm extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      minPrice: this.props.minPrice,
      maxPrice: this.props.maxPrice,
      address: ""
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
  <div className="row">
    <label>Location </label>
    <input
      type="text"
      value={this.state.address}
      onChange={this.handleChange('address', this.props.updateFilter)}/>
     <br/>

    <label>Minimum Price </label>
    <input
      type="number"
      value={this.state.minPrice}
      onChange={this.handleChange('minPrice', this.props.updateFilter)}/>
     <br/>
    <label>Maximum Price </label>
    <input
      type="number"
      value={this.state.maxPrice}
      onChange={this.handleChange('maxPrice', this.props.updateFilter)}/>
  </div>
  )
}
};

export default FilterForm;
