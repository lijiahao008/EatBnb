import React from 'react';
import MenuIndexItem from './menu_index_item';

const MenuIndex = ({ menus }) => (
  <div className="row text-center menu-index">
    <h1>Menus: </h1>
    {menus.map(menu => (
      <MenuIndexItem menu={menu} key={menu.id} />
    ))}
  </div>
);

export default MenuIndex;
