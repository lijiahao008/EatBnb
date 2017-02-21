
const React = require('react');

const handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
)

const FilterForm = ({ minPrice, maxPrice, updateFilter }) => (
  <div>
    <br/>
    <label>Minimum Prices </label>
    <input
      type="number"
      value={minPrice}
      onChange={handleChange('minPrice', updateFilter)}/>
     <br/>
    <label>Maximum Price </label>
    <input
      type="number"
      value={maxPrice}
      onChange={handleChange('maxPrice', updateFilter)}/>
  </div>
);

export default FilterForm;
