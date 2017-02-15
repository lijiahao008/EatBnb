import React from 'react';
import { Link, hashHistory } from 'react-router';

const editLink = id => e => {
    e.preventDefault();
    const url = `/menus/${id}/edit`;
    hashHistory.push(url);
};

const MenuIndexItem = ({ menu, router }) => (
  <li>
    <Link to={`/menus/${menu.id}`}>
      {menu.title}
    </Link>&nbsp;
    <button onClick={editLink(menu.id)}>Edit</button>&nbsp;
  </li>
);

export default MenuIndexItem;
