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
    this.removeError = this.removeError.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.currentUser) {
      const menu_review = this.state;
      this.props.createMenuReview({menu_review}).then(
        this.setState({score: 0, body: ""})
      );
    }
    else {
      document.getElementById("log-in-button").click();
    }
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({score: nextValue});
  }

  removeError(){
    this.props.clearErrors(this.props.menuId);
  }


  render () {
    let errors_display;
    if (this.props.errors && this.props.errors.length > 0) {
      const errors = [];
      this.props.errors.forEach((error, idx) => {
        errors.push(<div key={idx} className="single-error">{error}</div>)
      });
      errors_display =
      <div className="menu-form-errors">
        <div className="close-errors">
          Errors: <i className="fa fa-times" onClick={this.removeError}></i>
        </div>
        {errors}
      </div>
    }
    return (
    <div className="container new-review">
      <div className="row">
        <div className="col-md-6">
            {errors_display}
            <form onSubmit={this.handleSubmit}>
              <div className="spoons">
                <h4>Score:</h4>
              <Spoons
                  name="rate1"
                  starCount={5}
                  value={this.state.score}
                  renderStarIcon={() => <span><i className="fa fa-spoon"></i></span>}
                  starColor={"#f14444"}
                  emptyStarColor={"lightgrey"}
                  onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            <div className="new-review-body">
              <textarea cols="50" placeholder="Enter your review here..." rows="5"
                onChange={this.update("body")}
                value={this.state.body} required/>

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
