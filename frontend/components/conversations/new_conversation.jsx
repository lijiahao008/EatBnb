import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactDOM from 'react-dom';

class NewConversation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			receipts: [],
      subject: "",
			body: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

  componentDidMount(){
    this.props.fetchUsers();
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
    return (
			<div>
			<form onSubmit={this.handleSubmit}>
				<div>users:</div>
				<div>Subject:</div>
				<input value={this.state.subject}
					onChange={this.update("subject")}/>
				<div>Body:</div>
					<input value={this.state.body}
						onChange={this.update("body")}/>
					<button type="submit">Send</button>
			</form>
			<button onClick={this.props.close}></button>
			</div>
		);
	}

}

export default withRouter(NewConversation);
