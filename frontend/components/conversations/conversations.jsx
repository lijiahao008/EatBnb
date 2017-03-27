import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class Conversations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {currentBox: "Inbox"}

		this.handleClick = this.handleClick.bind(this);
		this.renderMailbox = this.renderMailbox.bind(this);
	}

	handleClick(id, action, e) {
		e.preventDefault();
		switch (action) {
			case "restore":
				e.preventDefault();
				this.props.restoreConversation(id);
				break;
			case "trash":
				e.preventDefault();
				this.props.moveToTrash(id);
				break;
			case "markAsRead":
				e.preventDefault();
				this.props.markAsRead(id);
				break;
			case "markAsUnread":
				e.preventDefault();
				this.props.markAsUnRead(id);
				break;
			case "redirect":
				e.preventDefault();
				hashHistory.push(`conversations/${id}`)
				break;
		}
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
						let trash_button;
						let read_button;
						if (conversation.trashed) {
							trash_button = <a className="btn btn-sm btn-default" onClick={(e)=>this.handleClick(conversation.id, "restore", e)}><i className="fa fa-recycle"></i></a>
						}
						else{
							trash_button = <a className="btn btn-sm btn-danger" onClick={(e)=>this.handleClick(conversation.id, "trash", e)}><i className="fa fa-trash"></i></a>
						}
						if (box === "Trash") {
							read_button = "";
						}
						else{
							if (conversation.is_unread) {
								read_button =	<a className="btn btn-sm btn-success" onClick={(e)=>this.handleClick(conversation.id, "markAsRead", e)}><i className="fa fa-envelope-open"></i></a>
							}
							else {
						  	read_button = <a className="btn btn-sm btn-primary" onClick={(e)=>this.handleClick(conversation.id, "markAsUnread", e)}><i className="fa fa-envelope-o"></i></a>
							}
						}
						return (
							<li key={conversation.id}>
								<div className="row">
									<div className="col-md-9"
										onClick={(e)=>this.handleClick(conversation.id, "redirect", e)}>
										<div className="conversation-last-message-sender"><strong>From:</strong> {conversation.last_message_sender}</div>
										<div className="conversation-subject"><strong>Subject:</strong> {conversation.subject}</div>
										<div className="conversation-last-message"><strong>Last Message:</strong> {conversation.last_message}</div>
										<div className="conversation-last-activity">{conversation.updated_at}</div>
								</div>
								<div className="col-md-3 mail-buttons text-center">
									{read_button}
									{trash_button}
								</div>
							</div>
							</li>
						)
					},this)}
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
