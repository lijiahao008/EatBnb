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
    this.props.createMenu({menu}).then((menu)=>{ hashHistory.push(`/menus/${menu.menu.id}`)});

  }

  onDrop(acceptedFiles, rejectedFiles){
    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);
  }


  render () {
    return (
  <div className="container menu-steps">
    <div className="row">
        <div className="col-md-6">
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
                                        <input type="text" className="form-control" placeholder="What would you name your menu?"
                                        onChange={this.update("title")}
                                        required />
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
                                      <textarea className="form-control" placeholder="Tell everybody about your menu." rows="5"
                                      onChange={this.update("description")} required />
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
                                      <input type="text" className="form-control" placeholder="How much are you charging?"
                                      onChange={this.update("price")}
                                      required />
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <i className="fa fa-location-arrow" aria-hidden="true"></i> Location
                        </h4>
                    </div>
                    </a>
                    <div id="collapseFour" className="panel-collapse collapse">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                      <input type="text" className="form-control" placeholder="Where will this be hosted?"
                                      onChange={this.update("address")}
                                      required />
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <i className="fa fa-picture-o" aria-hidden="true"></i> Photos
                        </h4>
                    </div>
                    </a>
                    <div id="collapseFive" className="panel-collapse collapse">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <Dropzone
                                      onDrop={this.onDrop}
                                      className="menu-dropzone">
                                      <p>Drop some files here, or click to select files to upload.</p>
                                    </Dropzone>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default menu-finish">
                  <a onClick={this.handleSubmit}>
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <i className="fa fa-check" aria-hidden="true"></i> Finish
                        </h4>
                    </div>
                  </a>
                </div>
            </div>
        </div>
        <div className="col-md-6 text-center">
          <a href="https://clipartfest.com/download/9d8b98c6e628dab878145182fa4559299a5021a4"><img src="https://img.clipartfest.com/5076c81c86b3d51ddd74703dd93c401d_-barbeque-pig-pit-style-pig-cooking-clipart_1600-1526.png" width="400" alt="pig cooking clipart" /></a>
        </div>
    </div>
</div>
    );
  }
}

export default withRouter(MenuForm);
