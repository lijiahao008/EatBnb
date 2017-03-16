import React from 'react';
import MenuReviewFormContainer from './menu_review_form_container';
import ReservationFormContainer from '../reservations/reservation_form_container';

class MenuShow extends React.Component {
  constructor(props){
    super(props);
    this.generateSpoon = this.generateSpoon.bind(this);
  }

  componentDidMount() {
    this.props.fetchMenu(this.props.params.menuId);
  }

  generateSpoon(num){
    let result=[];
    for (var i = 0; i < num; i++) {
      result.push(<i className="fa fa-spoon spoons" key={i}></i>);
    }
    return result;
  }

  render () {
    const menu = this.props.menu;
    if (!menu) {
      return <div>Loading...</div>;
      }

    const stars = [];
    for (var i = 0; i < menu.average_rating; i++) {
      stars.push(<i className="fa fa-spoon" aria-hidden="true" key={i}></i>);
    }

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
            <h4>{stars} ({menu.average_rating})</h4>
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
            <MenuReviewFormContainer menuId={menu.id} />
            <ReservationFormContainer menu={menu}/>
        </div>

      </div>
    );
  }
}

export default MenuShow;
