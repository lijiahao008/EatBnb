import React from 'react';
import MenuIndexItem from './menu_index_item';
import Infinite from 'react-infinite';

const MenuIndex = ({ menus }) => (
  <div className="row text-center menu-index">
    <h1>Menus: </h1>
    <Infinite containerHeight={650} elementHeight={150}>
    {menus.map(menu => (
      <MenuIndexItem menu={menu} key={menu.id} />
    ))}
    </Infinite>
  </div>
);

export default MenuIndex;
