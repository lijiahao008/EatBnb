import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});



class MenuMap extends Component {
  constructor(props){
    super(props);
    this.center = props.address;

  }

  componentDidMount() {

    let result;
    const createMap = address => {
      let geocoder = new google.maps.Geocoder();
      if (address === "") {
        address = "new york"
      }
      geocoder.geocode( { 'address': address}, (results, status) => {
        result = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()}

        const _mapOptions = {
          center: result,
          zoom: 12
        }
        const map = this.refs.map;
        this.map = new google.maps.Map(map, _mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
        if (this.props.singleBench) {
          this.props.fetchMenu(this.props.benchId);
        } else {
          this._registerListeners();
          this.MarkerManager.updateMarkers(this.props.menus);
        }
      });
    }
    createMap(this.center);

  }

  componentDidUpdate() {
    if(this.props.singleMenu){
      this.MarkerManager.updateMarkers([this.props.menus[Object.keys(this.props.menus)[0]]]);
    } else if(this.MarkerManager){
      this.MarkerManager.updateMarkers(this.props.menus);
    }
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }

  _handleMarkerClick(menu) {
    this.props.router.push(`menus/${menu.id}`);
  }

  _handleClick(coords) {
    this.props.router.push({
      pathname: "menus/new",
      query: coords
    });
  }

  render() {

    return <div className="map" ref="map">Map</div>;
  }
}

export default withRouter(MenuMap);
