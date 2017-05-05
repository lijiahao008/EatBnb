import React from 'react';
import MenuReviewFormContainer from './menu_review_form_container';
import ReservationFormContainer from '../reservations/reservation_form_container';
import MenuMap from '../menu_map/menu_map';

class MenuShow extends React.Component {
  constructor(props){
    super(props);
    this.generateSpoon = this.generateSpoon.bind(this);
    this.generateButtons = this.generateButtons.bind(this);
  }

  componentDidMount() {
    this.props.fetchMenu(this.props.params.menuId);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll(){
    let form = document.getElementById("reservation-form");
    if (form) {
      if (window.scrollY > 620 && window.scrollY < (document.body.offsetHeight - 1070)) {
        form.classList.add('stay-top');
      }
      else {
        form.classList.remove('stay-top');
      }
    }
  }

  generateSpoon(num){
    let result=[];
    for (var i = 0; i < num; i++) {
      result.push(<i className="fa fa-spoon spoons" key={i}></i>);
    }
    return result;
  }

  generateButtons(reviewOwnerId){
    if (reviewOwnerId === this.props.currentUserId) {
      return <div className="review-buttons"><div className="btn btn-sm btn-danger"><i className="fa fa-times"></i></div><div className="btn btn-sm btn-primary"><i className="fa fa-pencil-square-o"></i></div></div>
    }
  }

  render () {
    const menu = this.props.menu;
    if (!menu) {
      return <div className="loading"><img src={window.images.spinner}/></div>;
      }

    const average_rating_spoons = this.generateSpoon(menu.average_rating);

    let num_reviews;
    if (menu.reviews) {
        num_reviews = menu.reviews.length;
    }
    else {
      num_reviews = 0;
      menu.reviews = [];
    }

    return (
      <div className="container-full">
        <img src={menu.picture_url} />
          <hr width="90%"/>
        <div className="menu-detail">
          <div className="menu-detail-owner">
            <img src={menu.owner_profile_pic} className="ownerProfilePic"/>
            <h4>{menu.owner_name}</h4>
          </div>
          <div className="menu-detail-description">
            <h1>{menu.title}</h1>
            <h4>{average_rating_spoons} ({menu.average_rating})</h4>
            <h4>{menu.address}</h4>
            <h4>{menu.description}</h4>
          </div>
        </div>
        <hr width="90%"/>
        <div className="specs">
          <h2>About this listing</h2>
          <h4>{menu.description}</h4>
          <hr/>
          <h2>{num_reviews} Review(s)</h2>
          <ul>{menu.reviews.map(review => (
              <div className="single-review" key={review.id}>
                <div className="review-owner">
                  <img src={review.owner_profile_pic} />
                  <h4>{review.owner_name}</h4>
                </div>
                <div className="review-body">
                  <h4>Score: {this.generateSpoon(review.score)}</h4>
                  <h4>{review.body}</h4>
                  <strong>{review.created_at}</strong>
                </div>
                {this.generateButtons(review.owner_id)}
              </div>
            ))}</ul>
            <h2>Your Host</h2>
            <hr />
            <div className="host-information">
          <img src={menu.owner_profile_pic} />
            <div className="host-description">
              <h2>{menu.owner_name}</h2>
              <h4>Member since: {menu.owner_member_since}</h4>
              <h4>{menu.owner_description}</h4>
            </div>
            </div>
            <hr/>
              <h2>Write A Review</h2>
              <hr />
        </div>
        <MenuReviewFormContainer menuId={menu.id} />
        <ReservationFormContainer
          menuId={menu.id}
          menuPrice={menu.price}/>
        <div className="single-map">
          <MenuMap singleMenu={true} address={menu.address} fetchMenu={this.props.fetchMenu} menuId={menu.id}/>
        </div>
      </div>
    );
  }
}

export default MenuShow;
