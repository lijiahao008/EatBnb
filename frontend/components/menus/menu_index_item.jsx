import React from 'react';
import { Link, hashHistory } from 'react-router';


const MenuIndexItem = ({ menu, router }) => (
    <div className="col-xs-12 col-sm-4">
      <Link to={`/menus/${menu.id}`}>
        <img src= "http://loremflickr.com/320/240?food" />
        <strong>${menu.price} {menu.title}</strong>
      </Link>&nbsp;
    </div>
);

export default MenuIndexItem;
