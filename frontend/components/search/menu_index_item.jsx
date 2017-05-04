import React from 'react';
import { hashHistory, withRouter } from 'react-router';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.generateSpoon = this.generateSpoon.bind(this);

  }

  handleClick() {
    const menuId = this.props.menu.id;
    this.props.router.push(`menus/${menuId}`);
  }

  generateSpoon(num){
    let result=[];
    for (var i = 0; i < num; i++) {
      result.push(<i className="fa fa-spoon spoons" key={i}></i>);
    }
    return result;
  }

  handleMouseEnter(){
    window.map.markers.forEach((marker) => {
        if (marker.menuId === this.props.menu.id) {
          marker.infowindow.open(window.map, marker)
        }
      }
    )
  }

  handleMouseLeave(){
    window.map.markers.forEach((marker) => {
        if (marker.menuId === this.props.menu.id) {
          marker.infowindow.close()
        }
      }
    )
  }

  render() {
    const menu = this.props.menu;

    return (
        <div
          key={menu.id}
          className="col-sm-6 search-menu-items"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
            <img src={menu.picture_url} height="180" width="270" onClick={()=> (hashHistory.push(`/menus/${menu.id}`))}
            />
          <div className="menu-items-detail">
            <div className="menu-items-price">
             ${menu.price}  {menu.title}
            </div>
            <div className="menu-items-ratings">
             {this.generateSpoon(menu.average_rating)}
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(IndexItem);
