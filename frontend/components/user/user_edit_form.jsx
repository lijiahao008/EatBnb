import React from 'react';
import { Link, hashHistory } from 'react-router';
import Dropzone from 'react-dropzone';


class UserEditForm extends React.Component {
  constructor(props){
    super(props)
    let user = this.props.user
    this.state = {
      f_name: user.f_name,
      l_name: user.l_name,
      description: user.description,
      email: user.email,
      host: user.host,
      profile_image_url: user.profile_image_url
    }

  }

  update(field) {
    return (e) =>
      this.setState({[field]: e.target.value})
  }

  onDrop(acceptedFiles, rejectedFiles){
    console.log('Accepted files: ', acceptedFiles);
     console.log('Rejected files: ', rejectedFiles);
  }


  render () {

    return (
  <div className="container user-edit">
    <div className="row">
      <div className="col-md-10 ">
      <form className="form-horizontal">
      <fieldset>

      <legend>Edit User Profile</legend>

      <div className="form-group">
        <label className="col-md-4 control-label" >Email</label>
        <div className="col-md-4">
        <input id="textinput" name="textinput" type="text" placeholder="Email" className="form-control input-md" value={this.state.email}
        onChange={this.update("email")}/>

        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label">First Name</label>
        <div className="col-md-4">
        <input type="text" placeholder="first name" className="form-control input-md"
        value={this.state.f_name}
        onChange={this.update("f_name")} />

        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label">Last Name</label>
        <div className="col-md-4">
        <input type="text" placeholder="last name" className="form-control input-md"
        value={this.state.l_name}
        onChange={this.update("l_name")} />

        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label">Host?</label>
        <div className="col-md-4 checkboxes">
          <input type="checkbox"
            className="checkbox" value="true" onChange={this.update("host")} />Yes
          <input type="checkbox"
            className="checkbox" value="false" onChange={this.update("host")} />No
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label">Description</label>
        <div className="col-md-4">
          <textarea className="form-control"
            rows="5"
            placeholder="tell us about you" value={this.state.description}
          onChange={this.update("description")} />
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" >upload photo</label>
        <div className="col-md-4">
            <Dropzone
              onDrop={this.onDrop}
              className="dropzone">
              <div>      Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-4 control-label" ></label>
        <div className="col-md-4">
          <button id="singlebutton" className="btn btn-primary">submit</button>
        </div>
      </div>

      </fieldset>
      </form>
    </div>
      <div className="col-md-2 hidden-xs">
        <img src={this.state.profile_image_url} className="img-responsive img-circle " />
      </div>
    </div>
  </div>
    );
  }
}

export default UserEditForm;
