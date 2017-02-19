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

    const stars = [];
    for (var i = 0; i < this.props.menu.average_rating; i++) {
      stars.push(<i className="fa fa-spoon" aria-hidden="true" key={i}></i>);
    }

    return (
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
          <h2>{menu.reviews.length} Review(s)</h2>
          <ul>{menu.reviews.map(review => (
              <div className="single-review" key={review.id}>
                <div className="review-owner">
                  <img src={review.owner_profile_pic} />
                  <h4>{review.owner_name}</h4>
                </div>
                <div className="review-body">
                  <h4>{review.body}</h4>
                  <strong>{review.created_at}</strong>
                  <hr width="100%"/>
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
        </div>
      </div>
    );
  }
}

export default MenuShow;
