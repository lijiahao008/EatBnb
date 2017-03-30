import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import Select from 'react-select';


class NewConversation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipients: [],
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
			recipients: Object.keys(this.state.recipients).map(id => this.state.recipients[id].value),
      subject: this.state.subject,
			body: this.state.body
		}
		this.props.createConversation(conversation);
		this.setState({
			recipients: [],
			subject: "",
			body: ""
		});
		this.props.close();
	}

	update(field){
		return (e) =>
      this.setState({[field]: e.target.value})
	}

	render() {
		if (this.props.usersOptions.length === 0) {
			return <div>loading...</div>
		}
    return (
			<div>
			<form onSubmit={this.handleSubmit}>
				<div>Users:</div>
				<Select
					value={this.state.recipients}
					options={this.props.usersOptions}
					multi
					onChange={(val)=>this.setState({recipients: val})}
					/>
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
