import React from 'react';

import FilterForm from './filter_form';
import MenuIndex from './menu_index';
import MenuMap from './../menu_map/menu_map';

const Search = ({ address, results, updateFilter }) => {
  return(
  <div className="container search-page">
    <div className="row">
      <div className="col-md-6">
        <MenuMap
          menus={results}
          updateFilter={updateFilter}
          address={address}
          singleMenu={false} />
      </div>
    <div className="col-md-6">
      <FilterForm
        minPrice={1}
        maxPrice={1000}
        updateFilter={updateFilter} />
      <MenuIndex menus={results} />
    </div>

    </div>
  </div>
)};

export default Search;
