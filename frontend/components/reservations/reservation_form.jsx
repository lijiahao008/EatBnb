import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Dropzone from 'react-dropzone';


class MenuForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      title: "",
      description: "",
      price: 0,
      address: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const menu = this.state;
    this.props.createMenu({menu}).then(this.setState({date: ""}));

  }

  onDrop(acceptedFiles, rejectedFiles){
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);
  }


  render () {
    return (
    );
  }
}

export default withRouter(MenuForm);
