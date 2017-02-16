import React from 'react';

class MenuShow extends React.Component {

  componentDidMount() {
    this.props.fetchMenu(this.props.params.menuId);
  }

  render () {
    const menu = this.props.menu;
    if (!menu) {
      return <div>Loading...</div>;
      }
    return (
    <div className="container-full">
      <img src="http://lorempixel.com/600/300/food" />
      <div className="menu-detail">
        <h3>{menu.title}</h3>
        <h1>{menu.price}</h1>
        <h1>{menu.description}</h1>
      </div>
    </div>
    );
  }
}

export default MenuShow;
