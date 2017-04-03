import React from 'react';
import Carousel from 'nuka-carousel';
import { Link, hashHistory } from 'react-router';


class RecommendedMenus extends React.Component {
  constructor(props){
    super(props);
    this.state = {count: 4};
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecommendedMenus();
    this.handleResize();
    window.addEventListener("resize", this.handleResize.bind(this));

  }

  handleResize(){
    const count = this.state.count;
    const width = $(window).width();

    if (width >= 1800 && count !== 5){
     this.setState({ count: 5 });
   } else if(width < 1800 && width >= 1420 && count !== 4){
     this.setState({ count: 4 });
   } else if(width < 1420 && width >= 1140 && count !== 3){
     this.setState({ count: 3 });
   } else if(width < 1140 && width >= 820 && count !== 2){
     this.setState({ count: 2 });
   } else if(width < 820 && width > 480 && count !== 2){
     this.setState({ count: 2 });
    } else if(width <= 480 && count !== 1){
     this.setState({ count: 1 });
    }
  }

  render () {

    const menus = this.props.menus;
    if (typeof(menus) === "undefined") {
      return <div className="home-loading"><img src={window.images.spinner}/></div>;
    }
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

export default RecommendedMenus;
