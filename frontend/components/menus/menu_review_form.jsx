import React from 'react';
import Spoons from 'react-star-rating-component';

class MenuReviewForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      score: 0,
      body: "",
      menu_id: this.props.menuId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const menu_review = this.state;
    this.props.createMenuReview({menu_review}).then(this.setState({score: 0, body: ""}));
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({score: nextValue});
  }


  render () {

    return (
    <div className="container new-review">
      <div className="row">
        <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <div className="spoons">
                <h4>Score:</h4>
              <Spoons
                  name="rate1"
                  starCount={5}
                  value={this.state.score}
                  renderStarIcon={() => <span><i className="fa fa-spoon" aria-hidden="true"></i></span>}
                  starColor={"#f14444"}
                  emptyStarColor={"lightgrey"}
                  onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            <div className="new-review-body">
              <textarea cols="50" placeholder="Enter your review here..." rows="5"
                onChange={this.update("body")} />

              <button className="btn btn-danger btn-md" type="submit">Create Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default MenuReviewForm;
