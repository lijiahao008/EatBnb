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
    <div>
      <div className="container-full">
        <img src="http://lorempixel.com/600/300/food" />
          <hr width="90%"/>
        <div className="menu-detail">
          <div className="menu-detail-owner">
            <img src={menu.owner_profile_pic} className="ownerProfilePic"/>
            <h4>{menu.owner_name}</h4>
          </div>
          <div className="menu-detail-description">
            <h1>{menu.title}</h1>
            <h4>{menu.address}</h4>
            <h4>{menu.description}</h4>
          </div>
        </div>
        <hr width="90%"/>
        <div className="specs">
          <h2>About this listing</h2>
          <p>{menu.description}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default MenuShow;
