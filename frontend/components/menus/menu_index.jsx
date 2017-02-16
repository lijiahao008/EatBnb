import React from 'react';
import MenuIndexItem from './menu_index_item';

class MenuIndex extends React.Component {
  componentDidMount() {
    this.props.fetchMenus();
  }

  render () {
    return (

  <div className="container featuredMenus">
    <div className="row align-items-center">
        {
          this.props.menus.map(menu => (

            <MenuIndexItem
              key={menu.id}
              menu={menu} />
          ))
        }
    </div>
  </div>

    );
  }
}

export default MenuIndex;
