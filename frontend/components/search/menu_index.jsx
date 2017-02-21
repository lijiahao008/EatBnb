import React from 'react';
import MenuIndexItem from './menu_index_item';

const MenuIndex = ({ menus }) => (
  <div>
    <h1>Menus: </h1>
    {menus.map(menu => (
      <MenuIndexItem menu={menu} key={menu.id} />
    ))}
  </div>
);

export default MenuIndex;
