import React from 'react';
import { hashHistory, withRouter } from 'react-router';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const menuId = this.props.menu.id;
    this.props.router.push(`menus/${menuId}`);
  }

  render() {
    const menu = this.props.menu;

    return (
        <div
          key={menu.id}
          className="col-md-6 search-menu-items">
            <img src={menu.picture_url} height="180" width="270" onClick={()=> (hashHistory.push(`/menus/${menu.id}`))}
            />
           <div>
             ${menu.price} Title: {menu.title}
           </div>
      </div>
    );
  }
}

export default withRouter(IndexItem);
