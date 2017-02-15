import React from 'react';
import MenuIndexItem from './menu_index_item';

class MenuIndex extends React.Component {
  componentDidMount() {
    this.props.fetchMenus();
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.props.menus.map(menu => (
              <MenuIndexItem
                key={menu.id}
                menu={menu} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default MenuIndex;
