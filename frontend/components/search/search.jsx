import React from 'react';

import FilterForm from './filter_form';
import MenuIndex from './menu_index';
import MenuMap from './../menu_map/menu_map';

const Search = ({ address, results, updateFilter, loading, clearSearchResults }) => {
  return(
  <div className="container search-page">
    <div className="row">
      <div className="col-md-6 search-map">
        <MenuMap
          menus={results}
          updateFilter={updateFilter}
          address={address}
          singleMenu={false} />
      </div>
    <div className="col-md-6 search-result">
      <FilterForm
        minPrice={1}
        maxPrice={500}
        address={address}
        updateFilter={updateFilter} />
      <MenuIndex menus={results} loading={loading} clearSearchResults={clearSearchResults}/>
    </div>

    </div>
  </div>
)};

export default Search;
