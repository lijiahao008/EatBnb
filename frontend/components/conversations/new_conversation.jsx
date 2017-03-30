import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactDOM from 'react-dom';

class Conversation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      subject: "",
			body: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const conversation = {
      subject: this.state.subject,
			body: this.state.body
		}
		this.props.createConversation(conversation);
	}

	update(field){
		return (e) =>
      this.setState({[field]: e.target.value})
	}

	render() {
    <div>
			</div>
		);
	}

}

export default withRouter(Conversation);
