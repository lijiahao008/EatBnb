import React from 'react';
import MenuIndexItem from './menu_index_item';

const MenuIndex = ({ menus }) => {
  let results;
  if (menus.length > 0){
    results = menus.map(menu => (
      <MenuIndexItem menu={menu} key={menu.id} />
    ))
  }
  else {
    results = <div className="no-results"><img src={window.images.no_results}/>
    <div>NO RESULTS FOUND...</div>
    </div>
  }

  return (
    <div className="row text-center menu-index">
      <h1>Results({results.length}): </h1>
      {results}
    </div>
)};

export default MenuIndex;
