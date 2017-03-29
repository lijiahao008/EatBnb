import React from 'react';
import { Link, withRouter } from 'react-router';

class Conversation extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	componentDidMount(){
		this.props.fetchConversation(this.props.conversationId);
		this.props.markAsRead(this.props.conversationId);
	}

	componentDidUpdate(prevProps, prevState){
		if (this.props.conversationId != prevProps.conversationId ) {
			this.props.fetchConversation(this.props.conversationId);
			this.props.markAsRead(this.props.conversationId);
		}
	}

	render() {
    const conversation = this.props.conversation;
    if (!conversation.id) {
      return null;
    }
    const messages =
		<ul className="messages">
    {Object.keys(conversation.messages).map((id, idx) => {
			let side = idx % 2 === 1 ? " left" : " right";
      return (
					<li className={"message" + side} key={id}>
						<div className="text_wrapper">
	          	<div className="text">{conversation.messages[id].body}</div>
							<div className="time">{conversation.messages[id].created_at}</div>
						</div>
	          <img src={conversation.messages[id].sender_image} className="avatar" />

					</li>
      )
    })}
		</ul>
		return (
				<div className="chat_window">
					<div className="top_menu">
						<div className="buttons">
							<i className="fa fa-times button close"
								onClick={this.props.removeSelf}></i>

							<i className="fa fa-window-minimize button minimize"></i>
						</div>
						<div className="title">{conversation.subject}</div>
					</div>
						{messages}
					<div className="bottom_wrapper clearfix">
						<div className="message_input_wrapper">
							<input className="message_input" placeholder="Type your message here..." />
						</div>
						<div className="send_message">
							<div className="icon"></div>
							<div className="text"><i className="fa fa-paper-plane"></i></div>
						</div>
					</div>

			</div>
		);
	}

}

export default withRouter(Conversation);
