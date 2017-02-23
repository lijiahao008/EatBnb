json.reservations @reservations.each do |reservation|
    json.id reservation.id
    json.menu_name reservation.menu.title
    json.menu_owner_profile_pic reservation.menu.owner.profile_image_url
    json.created_at time_ago_in_words(reservation.created_at) + " ago"
end
