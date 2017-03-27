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

	render() {
    const conversation = this.props.conversation;
    if (!conversation.id) {
      return <div className="loading"><img src={window.images.spinner}/></div>;
    }
    const messages =
    <div>
    {Object.keys(conversation.messages).map(id => {
      return (
        <div key={id}>
          <div>{conversation.messages[id].body}</div>
          <div>{conversation.messages[id].sender}</div>
          <div>{conversation.messages[id].created_at}</div>
        </div>
      )
    })}
    </div>
		return (
      <div className="container conversation">
        <div
           key={conversation.id}>
          <div>Subject: {conversation.subject}</div>
          <div>Started on: {conversation.created_at}</div>
          <div>Last Activity: {conversation.updated_at}</div>
      </div>
      <div>
        Messages:
        <div>
          {messages}
        </div>
      </div>

      </div>
		);
	}

}

export default withRouter(Conversation);
