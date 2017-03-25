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
	}

	render() {
		return (
      <div className="container conversation">
        <div
          className="col-md-9"
           key={this.props.conversation.id}>
          <div>Subject: {this.props.conversation.subject}</div>
          <div>Started on: {this.props.conversation.created_at}</div>
          <div>Last Activity: {this.props.conversation.updated_at}</div>
      </div>

      </div>
		);
	}

}

export default withRouter(Conversation);
