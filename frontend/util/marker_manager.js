export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];

    this._createMarkerFromMenu = this._createMarkerFromMenu.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(menus){
    this.menus = menus;
    this._menusToAdd().forEach(this._createMarkerFromMenu);
    this._markersToRemove().forEach(this._removeMarker);
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
      menuId: menu.id
    });
    marker.addListener('click', () => this.handleClick(menu));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
