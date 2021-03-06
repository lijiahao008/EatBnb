import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';


class MyMenus extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchMyMenus();
  }

  render () {
    if (this.props.loading) {
        return <div className="loading"><img src={window.images.spinner}/></div>;
    }
    else {
      const menus = this.props.menus;
      if (menus.length == 0) {
        return <div className="no-results text-center"><img src={window.images.no_results}/>
        <div>NO RESULTS FOUND...</div>
        </div>;
      }
    }
    return (
    <div className="container my-listing">
      <h1 className="text-center">My Listings</h1>
      <div className="row destacados">
        {this.props.menus.map(menu => {
          return (
            <div className="col-md-4"
              key={menu.id}>
              <div>
        				<img src={menu.picture_url}
                  className="img-thumbnail"
                  height="300" width="400"
                  onClick={(e) => {e.preventDefault(); hashHistory.push(`menus/${menu.id}`)}}/>
        				<h2
                  onClick={(e) => {e.preventDefault(); hashHistory.push(`menus/${menu.id}`)}}
                  >${menu.price} {menu.title}</h2>
        				<p
                  onClick={(e) => {e.preventDefault(); hashHistory.push(`menus/${menu.id}`)}}
                  >{menu.description}</p>
                <div>
        				<a className="btn btn-danger btn-block edit-button" onClick={(e) => {e.preventDefault(); hashHistory.push(`menus/${menu.id}/edit`)}}> Edit </a>
                <a className="btn btn-default btn-block pull-right"
                onClick={()=>this.props.deleteMenu(menu.id)}> Delete </a>
                </div>
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

export default withRouter(MyMenus);
