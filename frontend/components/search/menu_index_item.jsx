import React from 'react';
import { withRouter } from 'react-router';

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
    const { price, description } = this.props.menu;

    return (
      <div className="menu-index-item"
           onClick={this.handleClick}>
        <div className="index-item-info">
          <span className="index-item-category">Price: </span>
          <span className="index-item-copy">
            {price}
          </span>
          <span className="index-item-category">Description: </span>
          <span className="index-item-copy">{description}</span>
        </div>

      </div>
    );
  }
}

export default withRouter(IndexItem);
