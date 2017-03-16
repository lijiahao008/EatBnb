json.array! @menus do |menu|

  json.id menu.id
  json.title menu.title
  json.price menu.price
  json.description menu.description
  json.picture_url asset_path(menu.picture.url)
  json.latitude menu.latitude
  json.longitude menu.longitude
end
