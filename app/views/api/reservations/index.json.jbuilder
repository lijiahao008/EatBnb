json.array! @reservations.each do |reservation|
    json.id reservation.id
    json.confirmed reservation.confirmed
    json.date reservation.date
    json.menu_name reservation.menu.title
    json.menu_description reservation.menu.description
    json.menu_owner_profile_pic asset_path(reservation.menu.owner.profile_image.url)
    json.created_at time_ago_in_words(reservation.created_at) + " ago"
end
