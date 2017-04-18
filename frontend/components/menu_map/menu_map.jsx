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
          zoom: this.props.singleMenu ? 18 : 12,
          mapTypeId: this.props.singleMenu ? google.maps.MapTypeId.HYBRID : google.maps.MapTypeId.ROADMAP
        }
        const map = this.refs.map;
        this.map = new google.maps.Map(map, _mapOptions);

        if (this.props.singleMenu) {
          this.props.fetchMenu(this.props.menuId);
          this.menuCircle = new google.maps.Circle({
            strokeColor: '#f14444',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#f14444',
            fillOpacity: 0.35,
            map: this.map,
            center: result,
            radius: 50
          });
        } else {
          window.map = this.map;
          this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
          this._registerListeners();
          this.MarkerManager.updateMarkers(this.props.menus);
        }
      });
    }
    createMap(this.center);

  }

  componentDidUpdate() {
    if(this.MarkerManager){
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
  }

  _handleMarkerClick(menu) {
    this.props.router.push(`menus/${menu.id}`);
  }

  render() {

    return <div className="map" ref="map">Map</div>;
  }
}

export default withRouter(MenuMap);
