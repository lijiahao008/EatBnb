import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactDOM from 'react-dom';

class Conversation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.scrollToBottom = this.scrollToBottom.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const message = {
			conversationId: this.props.conversationId,
			body: this.state.message
		}
		this.props.replyToConversation(message).then((message) => this.setState({message: ""}));
	}

	update(field){
		return (e) =>
      this.setState({[field]: e.target.value})
	}

	componentDidMount(){
		this.props.fetchConversation(this.props.conversationId).then(()=> this.scrollToBottom());
		this.props.markAsRead(this.props.conversationId);

	}


	componentDidUpdate(prevProps, prevState){
		if (this.props.conversationId != prevProps.conversationId ) {
			this.props.fetchConversation(this.props.conversationId);
			this.props.markAsRead(this.props.conversationId);
		}
		this.scrollToBottom();

	}

	scrollToBottom(){
		const node = ReactDOM.findDOMNode(this.messagesEnd);
		if (node) {
			node.scrollIntoView({behavior: "smooth"});
		}
	}

	render() {
    const conversation = this.props.conversation;
    if (!conversation.id) {
      return null;
    }
    const messages =
		<ul className="messages">
    {Object.keys(conversation.messages).map(id => {
			let side = conversation.messages[id].sender_id === this.props.currentUserId ? " right" : " left";
      return (
				<li className={"message" + side} key={id}>
					<div className="text_wrapper">
						<div className="name">{conversation.messages[id].sender_name}</div>
          	<div className="text">{conversation.messages[id].body}</div>
						<div className="time">{conversation.messages[id].created_at}</div>
					</div>
          <img src={conversation.messages[id].sender_image} className="avatar" />
				</li>
      )
    })}
		<div style={ {float:"left", clear: "both"} }
        ref={(el) => { this.messagesEnd = el; }}></div>
		</ul>
		return (
				<div className="chat_window">
					<div className="top_menu">
						<div className="buttons">
							<i className="fa fa-times button close"
								onClick={this.props.removeSelf}></i>
						</div>
						<div className="title">{conversation.subject}</div>
					</div>
						{messages}
					<div className="bottom_wrapper clearfix">
						<form onSubmit={this.handleSubmit}>
						<div className="message_input_wrapper">
								<input className="message_input"
									value = {this.state.message}
									onChange={this.update("message")}
									placeholder="Type your message here..." />
						</div>
						<button className="send_message"
							type="submit">
							<div className="text"><i className="fa fa-paper-plane"></i></div>
						</button>
						</form>
					</div>

			</div>
		);
	}

}

export default withRouter(Conversation);
