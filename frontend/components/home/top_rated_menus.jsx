import React from 'react';
import Carousel from 'nuka-carousel';
import { Link, hashHistory } from 'react-router';


class TopRatedMenus extends React.Component {

  constructor(props){
    super(props);
    this.state = {count: 4}
  }

  componentDidMount() {
    this.props.fetchTopRatedMenus();
  }

  render () {
    const menus = this.props.menus;
    if (typeof(menus) === "undefined") {
      return <div className="home-loading"><img src={window.images.spinner}/></div>;
    }
    const items = this.props.menus.map((menu, idx) => {
      return (
        <div
        key={idx}
        onClick={()=> (hashHistory.push(`/menus/${menu.id}`))}
        className="slide">
          <img src={menu.picture_url}
            height="200" width="260" />
          <div className="text-center">$ {menu.price} {menu.title}</div>
        </div>
      )
    })
    return (
      <Carousel
            slidesToShow={this.state.count}
            slidesToScroll={this.state.count}
            dragging={false}
            swiping={false}
            wrapAround = {true}
            initialSlideWidth={500}
            initialSlideHeight={300}
            height={'100%'}
            width={'100%'}
            speed={500}
            cellSpacing={4}
            decorators={[{
               component: React.createClass({
                 render() {
                   return (
                     <button
                       onClick={ this.props.currentSlide < this.props.slidesToScroll && this.props.currentSlide !== 0  ?
                         () => this.props.goToSlide(0) :
                         this.props.previousSlide  }>
                       <i className="fa fa-chevron-left" />
                     </button>
                   );
                 }
               }),
               position: 'CenterLeft'
             },{
               component: React.createClass({
                 render() {
                   return (
                     <button
                       onClick={this.props.currentSlide > this.props.slideCount - this.props.slidesToScroll ?
                         () => this.props.goToSlide(this.props.slideCount) :
                         this.props.nextSlide  }>
                       <i className="fa fa-chevron-right" />
                     </button>
                   );
                 },
               }),
               position: 'CenterRight'
             }]}>
             {items}
        </Carousel>
    );
  }
}

export default TopRatedMenus;
