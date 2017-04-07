@menus.each do |menu|
  json.set! menu.id do
    json.id menu.id
    json.title menu.title
    json.price menu.price
    json.description menu.description
    json.picture_url asset_path(menu.picture.url(:medium))
    json.latitude menu.latitude
    json.longitude menu.longitude
  end
end
