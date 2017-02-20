import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Dropzone from 'react-dropzone';


class MenuForm extends React.Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const menu = this.state;
    this.props.createMenu({menu}).then(hashHistory.push('/'));

  }

  onDrop(acceptedFiles, rejectedFiles){
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);
  }


  render () {
    return (
  <div className="container menu-steps">
    <div className="row">
        <div className="col-md-6 col-md-offset-3">
            <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <i className="fa fa-cutlery" aria-hidden="true"></i> Title
                        </h4>
                    </div>
                    </a>
                    <div id="collapseOne" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Title" required />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <i className="fa fa-pencil" aria-hidden="true"></i> Description
                        </h4>
                    </div>
                    </a>
                    <div id="collapseTwo" className="panel-collapse collapse">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                      <textarea className="form-control" placeholder="Description" rows="5" required></textarea>
                                  </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <i className="fa fa-usd" aria-hidden="true"></i> Price
                        </h4>
                    </div>
                    </a>
                    <div id="collapseThree" className="panel-collapse collapse">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                      <input type="text" className="form-control" placeholder="Price" required />
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
}

export default withRouter(MenuForm);
