import React from 'react';

import FilterForm from './filter_form';
import MenuIndex from './menu_index';
import MenuMap from './../menu_map/menu_map';

const Search = ({ menus, minPrice, maxPrice, updateFilter }) => (
  <div className="user-pane">
    <div className="left-half">
      <h5>Click Map to Add Menu!</h5>
      <MenuMap
        menus={menus}
        updateFilter={updateFilter}
        singleMenu={false} />
    </div>
    <div className="right-half">
      <FilterForm
        minPrice={minPrice}
        maxPrice={maxPrice}
        updateFilter={updateFilter} />
      <MenuIndex menus={menus} />
    </div>
  </div>
);

export default Search;
