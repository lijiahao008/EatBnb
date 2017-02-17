import React from 'react';
import Slider from 'react-slick';


class TopRatedMenus extends React.Component {
  componentDidMount() {
    this.props.fetchTopRatedMenus();
  }

  render () {
    let settings = {
      dots: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2
    };
    return (

      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    );
  }
}

export default TopRatedMenus;
