import { Link, withRouter } from 'react-router';

export default class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];

    this._createMarkerFromMenu = this._createMarkerFromMenu.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(menus){
    this.menus = menus;
    this._menusToAdd().forEach(this._createMarkerFromMenu);
    this._markersToRemove().forEach(this._removeMarker);
    this.map.markers = this.markers;
  }

  _menusToAdd() {
    const currentMenus = this.markers.map( marker => marker.menuId );
    return this.menus.filter( menu => !currentMenus.includes(menu.id) );
  }

  _markersToRemove(){
    const menuIds = this.menus.map( menu => menu.id );
    return this.markers.filter( marker => !menuIds.includes(marker.menuId) );
  }

  _createMarkerFromMenu(menu) {
    const pos = new google.maps.LatLng(menu.latitude, menu.longitude);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      menuId: menu.id,
      icon: window.images.spoon,
      animation: google.maps.Animation.DROP
    });
    marker.infowindow = new google.maps.InfoWindow({
      content: `<a href='#/menus/${menu.id}'>` + "<img class='menu-image' style='object-fit: cover' width='200' height='150' src=" + menu.picture_url +">" + "<div class='menu-name'>" +
      menu.title +"</div>" + "<div class='menu-price'>" + "$ " +
      menu.price +"</div></a>"
    });
    marker.addListener('click', () => marker.infowindow.open(this.map, marker));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
