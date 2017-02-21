import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297},
  zoom: 13
};

class MenuMap extends Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    if (this.props.singleBench) {
      this.props.fetchMenu(this.props.benchId);
    } else {
      this._registerListeners();
      this.MarkerManager.updateMarkers(this.props.menus);
    }
  }

  componentDidUpdate() {
    if(this.props.singleMenu){
      this.MarkerManager.updateMarkers([this.props.menus[Object.keys(this.props.menus)[0]]]);
    } else {
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
