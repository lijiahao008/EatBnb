import React from 'react';
import { Link } from 'react-router';

const nav_bar = (items) => (
  <nav className="navbar navbar-findcond navbar-fixed-top">
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

)

const logged_out = () => (
  nav_bar(
    <div className="collapse navbar-collapse" id="navbar">
  		<ul className="nav navbar-nav navbar-right">
  			<li className="active"><Link to="/login" activeClassName="current">Log In <span className="sr-only">(current)</span></Link></li>
        <li className="active"><Link to="/signup" activeClassName="current">Sign Up <span className="sr-only">(current)</span></Link></li>
  		</ul>
  	</div>
  )
);

const logged_in = (currentUser, logout) => (
  nav_bar(
    <div className="collapse navbar-collapse" id="navbar">
  		<ul className="nav navbar-nav navbar-right">
  			<li className="active"><a activeClassName="current">Hi, {currentUser.email}! <span className="sr-only">(current)</span></a></li>
        <li className="active"><a href="#" onClick={logout} activeClassName="current">Log Out<span className="sr-only">(current)</span></a></li>
  		</ul>
  	</div>
  )
);

const NavBar = ({ currentUser, logout }) => (
  currentUser ? logged_in(currentUser, logout) : logged_out()
);

export default NavBar;
