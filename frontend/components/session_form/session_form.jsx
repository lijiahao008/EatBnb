import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "", formType: this.props.formType };
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = {email: this.state.email, password:this.state.password};

		this.props.processForm({user}).then(()=>{
			this.props.parent.closeModal();
		});
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		let buttonText;
		let link;
    if (this.state.formType === "login"){
			buttonText = "Log In";
			link = <p className="text-center">Dont't have an account yet? <a href="#" onClick={()=>this.setState({formType: "signup"})}>Sign Up here</a></p>
		}
		else {
			buttonText = "Sign Up"
			link = <p className="text-center">Already have an account? <a href="#" onClick={()=>this.setState({formType: "login"})}>Sign in here</a></p>
		}

		return (

		<div className="col-md-4 col-md-offset-4 login-form">
			<div id="box">
				<div className="input-group">
					<span className="input-group-addon addon-facebook">
						<i className="fa fa-fw fa-2x fa-facebook"></i>
					</span>
					<a className="btn btn-lg btn-block btn-facebook" href="#"> Log in with Facebook</a>
				</div>

				<div className="input-group">
					<span className="input-group-addon addon-google">
						<i className="fa fa-fw fa-2x fa-google fa-fw"></i>
					</span>
					<a className="btn btn-lg btn-block btn-google" href="#"> Log in with Google</a>
				</div>
				{this.renderErrors()}
				<form role="form" onSubmit={this.handleSubmit}>

					<div className="divider-form"></div>

					<div className="form-group">
						<label>Email address</label>
							<input type="email"
								value={this.state.email}
								onChange={this.update("email")}
								className="form-control"
								placeholder="Enter email"
							 />
					</div>

					<div className="divider-form"></div>

					<div className="form-group">
						<label>Password</label>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="form-control"
								placeholder="Password"
							 />
					</div>

					<div className="divider-form"></div>

					<p className="text-center">You agree to the <strong>Terms & Conditions</strong>.</p>

					<button className="btn-block btn btn-lg btn-primary">{buttonText}</button>
					<a className="btn-block btn btn-lg btn-danger" onClick={()=> this.props.login({user: {email: "123@gmail.com", password: "password"}}).then(()=>{
						this.props.parent.closeModal();
					})}>Guest Log In</a>
					{link}
				</form>
			</div>
		</div>

		);
	}

}

export default withRouter(SessionForm);
