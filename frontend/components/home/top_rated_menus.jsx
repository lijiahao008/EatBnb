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
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      adaptiveHeight: true,
      className: "slider"
    };
    const menus = this.props.menus;
    if (menus.length === 0) {
      return <div>Loading...</div>;
    }
    const items = this.props.menus.map((menu, idx) => {

      return (
        <div
        key={idx}
        onClick={()=> (hashHistory.push(`/menus/${menu.id}`))}
        className="slide">
          <img src={menu.picture_url}
            height="180" width="270"
         />
        </div>
      )
    })
    return (
      <Slider {...settings}>
        {items}
      </Slider>
    );
  }
}

export default TopRatedMenus;
