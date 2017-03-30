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
			<div className="compose-form">
				<div className="compose-form-topbar">
					Start New Conversation <i className="fa fa-times compose-form-close-button" onClick={this.props.close}></i>
				</div>
				<div className="compose-form-body">
			<form onSubmit={this.handleSubmit}>
				<div className="field-label">Select recipients:</div>
				<Select
					value={this.state.recipients}
					options={this.props.usersOptions}
					multi
					onChange={(val)=>this.setState({recipients: val})}
					/>
				<div className="field-label">Subject:</div>
				<input value={this.state.subject}
					className="input-field subject"
					placeholder="Type your subject here..."
					onChange={this.update("subject")}/>
				<div className="field-label">Body:</div>
					<textarea value={this.state.body}
						className="input-field body"
						placeholder="Type your body here..."
						onChange={this.update("body")}/>
					<button className="btn btn-block btn-success" type="submit">Send</button>
			</form>
			</div>
			</div>
		);
	}

}

export default withRouter(NewConversation);
