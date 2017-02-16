import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';
import Modal from 'react-modal';



class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      formType: ""
    };

    this.openLogInModal = this.openLogInModal.bind(this);
    this.openSignUpModal = this.openSignUpModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
      Modal.setAppElement('body');
   }

  nav_bar(items) {
    const form = this.state.formType === "login" ? <SessionFormContainer formType="login" parent={this} /> :
    <SessionFormContainer formType="signup" parent={this} />
    return  (
      <div>

      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="session-form"
        className="Modal"
        overlayClassName="Overlay"
      >
        {form}
      </Modal>
      <nav className="navbar navbar-eatbnb navbar-fixed-top">
        <div className="container">
      		<div className="navbar-header">
      			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
      				<span className="sr-only">Toggle navigation</span>
      				<span className="icon-bar"></span>
      				<span className="icon-bar"></span>
      				<span className="icon-bar"></span>
      			</button>
            <Link to="/" className="navbar-brand">EatBnb</Link>
      		</div>
          {items}

    	  </div>
      </nav>
    </div>
    )
  }

  logged_out(){

    return (
      this.nav_bar(
        <div className="collapse navbar-collapse" id="navbar">
      		<ul className="nav navbar-nav navbar-right">
            <li><a href="#">Become A Host</a></li>
      			<li><a href="#" onClick={this.openLogInModal}>Log In </a></li>
            <li><a href="#" onClick={this.openSignUpModal}>Sign Up</a></li>
      		</ul>
      	</div>
      )
    )
  };

  logged_in(currentUser, logout){
    return(
      this.nav_bar(
        <div className="collapse navbar-collapse" id="navbar">
      		<ul className="nav navbar-nav navbar-right">
      			<li><a>Hi, {currentUser.email}!</a></li>
            <li><a href="#" onClick={logout}>Log Out</a></li>
      		</ul>
        </div>
      )
    )
  };

  openLogInModal() {
    this.setState({modalIsOpen: true, formType: "login"});
  }

  openSignUpModal() {
    this.setState({modalIsOpen: true, formType: "signup"});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    if (this.props.currentUser) {
      return this.logged_in(this.props.currentUser, this.props.logout) }
    else{
      return this.logged_out();
    }
  }
}



export default NavBar;
