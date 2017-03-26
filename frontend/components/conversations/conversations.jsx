import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class Conversations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {currentBox: "Inbox"}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderMailbox = this.renderMailbox.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	componentDidMount(){
		this.props.fetchConversations();
	}

	renderMailbox(box){
		let mailbox;
		switch (box){
			case "Inbox":
				mailbox = this.props.inbox;
				break;
			case "Sentbox":
				mailbox = this.props.sentbox;
				break;
			case "Trash":
				mailbox = this.props.trash;
				break;
		}
		return(
			<div className="mail-list">
				<h1 className="text-center">{box}</h1>
					{mailbox.map(conversation => {
						let read_button_text = conversation.is_unread ? "Mark as read" : "Mark as unread";
						let trash_button_text = conversation.trashed ? "Restore" : "Move to trash"
						return (
							<li key={conversation.id}
								onClick={(e)=> {e.preventDefault(); hashHistory.push(`conversations/${conversation.id}`)}}>
								<div className="row">
									<div className="col-md-9">
										<div className="conversation-last-message-sender"><strong>From:</strong> {conversation.last_message_sender}</div>
										<div className="conversation-subject"><strong>Subject:</strong> {conversation.subject}</div>
										<div className="conversation-last-message"><strong>Last Message:</strong> {conversation.last_message}</div>
										<div className="conversation-last-activity">{conversation.updated_at}</div>
								</div>
								<div className="col-md-3 mail-buttons text-center">
									<a className="btn btn-sm btn-danger">{trash_button_text}</a>
									<a className="btn btn-sm btn-primary">{read_button_text}</a>
								</div>
							</div>
							</li>
						)
					})}
			</div>)

	}


	render() {
		return (
	<div className="container messages">
	  <div className="row">
    	<div className="col-md-3">
				<div className="btn btn-lg btn-danger"><span className="glyphicon glyphicon-pencil"></span> Compose</div>
					<ul className="nav nav-pills nav-stacked">
						<li><a className="btn btn-md btn-default" onClick={()=>this.setState({currentBox: "Inbox"})}>Inbox</a></li>
						<li><a className="btn btn-md btn-default" onClick={()=>this.setState({currentBox: "Sentbox"})}>Sent</a></li>
						<li><a className="btn btn-md btn-default" onClick={()=>this.setState({currentBox: "Trash"})}>Trash</a></li>
	       	</ul>
			</div>
			<div className="col-md-9">
				{this.renderMailbox(this.state.currentBox)}
			</div>
		</div>
	</div>
		);
	}

}

export default withRouter(Conversations);
