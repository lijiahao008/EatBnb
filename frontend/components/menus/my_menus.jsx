import React from 'react';
import MyMenusContainer from './my_menus_container';
import { Link } from 'react-router';


class MyMenus extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchMyMenus();
  }

  render () {
    if (!this.props.menus) {
      return (<div>fetching</div>)
    }
    return (
    <div className="container my-listings">
        <div className="row">
    		<div className="well">
            <h1 className="text-center">My Listings</h1>
            <div className="list-group">
              {this.props.menus.map(menu => {
                return (
                <Link to={`menus/${menu.id}`} className="list-group-item">
                  <div className="col-md-3">
                      <figure className="pull-left">
                          <img className="media-object img-rounded img-responsive"  src={menu.picture_url} />
                      </figure>
                  </div>
                  <div className="col-md-6">
                      <h4 className="list-group-item-heading">{menu.title}</h4>
                      <p className="list-group-item-text">{menu.description}
                      </p>
                  </div>
                  <div className="col-md-3 text-center">
                      <button type="button" className="btn btn-danger btn-lg btn-block"> Edit </button>
                      <h3>$ {menu.price}</h3>
                  </div>
                </Link>
            )
          })
        }
        </div>
      </div>
    </div>
  </div>
    )
  }
}

export default MyMenus;
