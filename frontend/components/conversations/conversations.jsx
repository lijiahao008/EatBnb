import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import ConversationContainer from './conversation_container';
import NewConversationContainer from './new_conversation_container';

class Conversations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentBox: "Inbox",
			chatBoxId: 0,
			newConversation: false
		}

		this.handleClick = this.handleClick.bind(this);
		this.renderMailbox = this.renderMailbox.bind(this);
		this.renderChatbox = this.renderChatbox.bind(this);
		this.renderEmptyTrashButton = this.renderEmptyTrashButton.bind(this);
		this.renderNewConversation = this.renderNewConversation.bind(this);
	}

	handleClick(id, action, e) {
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
			case "openChat":
				e.preventDefault();
				this.setState({chatBoxId: id});
				break;
			case "emptyTrash":
				e.preventDefault();
				this.props.emptyTrash();
				break;
			case "newConversation":
				e.preventDefault();
				this.setState({newConversation: true});
				break;
		}
	}

	componentDidMount(){
		this.props.fetchConversations();
	}

	renderNewConversation(open){
		if (open) {
			return (<NewConversationContainer close={()=>this.setState({newConversation: false})}/>)
		}
		else {
			return "";
		}
	}

	renderChatbox(){
		if (this.state.chatBoxId === 0) {
			return "";
		}
		else {
			return (
				<ConversationContainer removeSelf={()=>this.setState({chatBoxId: 0})} id={this.state.chatBoxId} />
			)
		}
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
				{this.renderEmptyTrashButton()}
					{mailbox.map(conversation => {
						let trash_button;
						let read_button;
						if (conversation.trashed) {
							trash_button = <a className="btn btn-sm btn-default" onClick={(e)=>this.handleClick(conversation.id, "restore", e)}><i className="fa fa-recycle"></i></a>
						}
						else{
							trash_button = <a className="btn btn-sm btn-danger" onClick={(e)=>this.handleClick(conversation.id, "trash", e)}><i className="fa fa-trash"></i></a>
						}
						if (box === "Trash" || box === "Sentbox") {
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
										onClick={(e)=>this.handleClick(conversation.id, "openChat", e)}>
										<div className="conversation-last-message-sender"><strong>Last From:</strong> {conversation.last_message_sender}</div>
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

	renderEmptyTrashButton(){
		if (this.state.currentBox === "Trash") {
			return (
				<div className="row"><div className="col-md-3 col-md-offset-9 empty-trash-button"><button className="btn btn-md btn-danger"
			onClick={(e)=>this.handleClick(null, "emptyTrash", e)}><i className="fa fa-trash"></i> Empty Trash</button></div></div>
			)
		}else {
			return "";
		}
	}


	render() {
		return (
	<div className="container messages-index">
	  <div className="row">
    	<div className="col-md-3">
				<div className="btn btn-lg btn-danger"
					onClick={(e)=>this.handleClick(null, "newConversation", e)}><span className="glyphicon glyphicon-pencil"></span> Compose</div>
					<ul className="nav nav-pills nav-stacked">
						<li><a className="btn btn-md btn-default" onClick={()=>this.setState({currentBox: "Inbox"})}>Inbox</a></li>
						<li><a className="btn btn-md btn-default" onClick={()=>this.setState({currentBox: "Sentbox"})}>Sent</a></li>
						<li><a className="btn btn-md btn-default" onClick={()=>this.setState({currentBox: "Trash"})}>Trash</a></li>
	       	</ul>
			</div>
			<div className="col-md-9 mail-box">
				{this.renderMailbox(this.state.currentBox)}
			</div>

		</div>
		{this.renderNewConversation(this.state.newConversation)}
		{this.renderChatbox(this.state.chatBoxId)}
	</div>
		);
	}

}

export default withRouter(Conversations);
