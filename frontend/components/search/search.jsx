import React from 'react';

import FilterForm from './filter_form';
import MenuIndex from './menu_index';
import MenuMap from './../menu_map/menu_map';

const Search = ({ menus, minPrice, maxPrice, updateFilter }) => (
  <div className="container search-page">
    <div className="row">
      <div className="col-md-6">
        <MenuMap
          menus={menus}
          updateFilter={updateFilter}
          singleMenu={false} />
      </div>
    <div className="col-md-6">
      <FilterForm
        minPrice={minPrice}
        maxPrice={maxPrice}
        updateFilter={updateFilter} />
      <MenuIndex menus={menus} />
    </div>

    </div>
  </div>
);

export default Search;
