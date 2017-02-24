import React from 'react';
import { Link, hashHistory } from 'react-router';


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
    <div className="container my-listing">
      <h1 className="text-center">My Listings</h1>
      <div className="row destacados">
        {this.props.menus.map(menu => {
          return (
            <div className="col-md-4">
              <div onClick={() => hashHistory.push(`menus/${menu.id}`)}>
        				<img src={menu.picture_url} className="img-thumbnail" height="300" width="400"/>
        				<h2>${menu.price} {menu.title}</h2>
        				<p>{menu.description}</p>
        				<a className="btn btn-danger btn-block"> Edit </a>
                <a className="btn btn-default btn-block pull-right"> Delete </a>
        			</div>
            </div>
          )
        })
      }
    </div>
  </div>
    )
  }
}

export default MyMenus;
