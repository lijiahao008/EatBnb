import React from 'react';
import Carousel from 'nuka-carousel';
import { Link, hashHistory } from 'react-router';


class RecomendedMenus extends React.Component {
  constructor(props){
    super(props);
    this.state = {count: 4}
  }

  componentDidMount() {
    this.props.fetchMenus();
  }

  render () {

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
                       <i className="fa fa-angle-left" />
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
                       <i className="fa fa-angle-right" />
                     </button>
                   );
                 },
               }),
               position: 'CenterRight'
             }]}>
             {
               this.props.menus.map(menu => (
                 <div
                 key={menu.id}>
                   <img src={menu.picture_url} alt={menu.title}
                   onClick={()=>hashHistory.push(`/menus/${menu.id}`)}
                   height= "200"
                   width="260"
                   />
                 <div>$ {menu.price} {menu.title}</div>
                </div>
               ))
             }
        </Carousel>
    );
  }
}

export default RecomendedMenus;
