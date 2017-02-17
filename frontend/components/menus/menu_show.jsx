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

    return (
    <div>
      <div className="container-full">
        <img src="https://placeimg.com/400/250/people" />
          <hr width="90%"/>
        <div className="menu-detail">
          <div className="menu-detail-owner">
            <img src={menu.owner_profile_pic} className="ownerProfilePic"/>
            <h4>{menu.owner_name}</h4>
          </div>
          <div className="menu-detail-description">
            <h1>{menu.title}</h1>
            <h4>{menu.address}</h4>
            <h4>{menu.description}</h4>
          </div>
        </div>
        <hr width="90%"/>
        <div className="specs">
          <h2>About this listing</h2>
          <p>{menu.description}</p>
          <hr/>
          <h2>{menu.reviews.length} Review(s)</h2>
          <ul>{menu.reviews.map(review => (
              <div className="single-review" key={review.score}>
                <div className="review-owner">
                  <img src={review.owner_profile_pic} />
                  <h4>{review.owner_name}</h4>
                </div>
                <div className="review-body">
                  <p>{review.body}</p>
                  <strong>{review.created_at}</strong>
                  <hr width="100%"/>
                </div>
              </div>
            ))}</ul>
        </div>
      </div>
    </div>
    );
  }
}

export default MenuShow;
