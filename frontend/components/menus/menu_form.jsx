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
      address: "",
      picture_url: "",
      picture: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.removeError = this.removeError.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === "edit") {
      this.props.fetchMenu(this.props.params.menuId).then(res => {
        this.setState(res.menu);
      })
    }
    else {
      this.setState({picture_url: "https://img.clipartfest.com/5076c81c86b3d51ddd74703dd93c401d_-barbeque-pig-pit-style-pig-cooking-clipart_1600-1526.png"})
    }
  }

  componentWillReceiveProps(newProps){
    if (newProps.formType === "new") {
      this.setState({
        title: "",
        description: "",
        price: 0,
        address: "",
        picture_url: "https://img.clipartfest.com/5076c81c86b3d51ddd74703dd93c401d_-barbeque-pig-pit-style-pig-cooking-clipart_1600-1526.png",
        picture: null
      })
    }
  }

  componentWillUnmount(){
    this.removeError();
  }

  update(field) {
    return (e) =>
      this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("menu[id]", this.props.params.menuId);
    formData.append("menu[title]", this.state.title);
    formData.append("menu[description]", this.state.description);
    formData.append("menu[price]", this.state.price);
    formData.append("menu[address]", this.state.address);
    if (this.state.picture) {
      formData.append("menu[picture]", this.state.picture);
    }
    if (this.props.formType === "new") {
      this.props.createMenu(formData).then((menu)=>{ hashHistory.push(`/myMenus`)});
    }
    else if(this.props.formType === "edit"){
      this.props.updateMenu(formData).then((menu)=>{ hashHistory.push(`/menus/${menu.menu.id}`)});
    }

  }

  removeError(){
    this.props.clearErrors();
  }

  onDrop(acceptedFiles, rejectedFiles){
    this.setState({picture: acceptedFiles[0],
    picture_url: acceptedFiles[0].preview})
  }


  render () {

    let errors_display;
    if (this.props.errors && this.props.errors.length > 0) {
      const errors = [];
      this.props.errors.forEach((error, idx) => {
        errors.push(<div key={idx} className="single-error">{error}</div>)
      });
      errors_display =
      <div className="menu-form-errors">
        <div className="close-errors">
          Errors: <i className="fa fa-times" onClick={this.removeError}></i>
        </div>
        {errors}
      </div>
    }

    return (

  <div className="container menu-steps">
    <div className="row">
        <div className="col-md-6">
          {errors_display}
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
                                        value={this.state.title}
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
                                      value={this.state.description}
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
                                      <input type="number" className="form-control" placeholder="How much are you charging?"
                                      value={this.state.price}
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
                                      value={this.state.address}
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
          <a><img src={this.state.picture_url} width="400" alt="pig cooking clipart" /></a>
        </div>
    </div>
</div>
    );
  }
}

export default withRouter(MenuForm);
