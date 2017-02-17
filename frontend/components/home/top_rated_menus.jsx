import React from 'react';
import Slider from 'react-slick';
import { Link, hashHistory } from 'react-router';


class TopRatedMenus extends React.Component {
  componentDidMount() {
    this.props.fetchTopRatedMenus();
  }

  render () {
    let settings = {
      dots: true,
      arrows: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      className: "slider"
    };
    const menus = this.props.menus;
    if (menus.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <Slider {...settings}>
        {this.props.menus.map(menu => {
          return (
            <div className="topRatedMenus"
              key={menu.id}
              onClick={()=> (hashHistory.push(`/menus/${menu.id}`))}>
              <img src="https://placeimg.com/400/250/people" />
              <strong>${menu.price} </strong>
              {menu.title}
            </div>
          )
        })}
      </Slider>
    );
  }
}

export default TopRatedMenus;
