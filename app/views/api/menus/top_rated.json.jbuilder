json.array! @menus do |menu|
  json.id menu.id
  json.title menu.title
  json.price menu.price
  json.average_rating menu.average_rating
  json.picture_url asset_path(menu.picture.url(:medium))
end
