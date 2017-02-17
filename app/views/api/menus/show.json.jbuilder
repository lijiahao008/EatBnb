json.id @menu.id
json.title @menu.title
json.description @menu.description
json.price @menu.price
json.address @menu.address
json.owner_name @menu.owner.f_name + " " + @menu.owner.l_name
json.owner_profile_pic @menu.owner.profile_image_url
json.reviews @menu.reviews do |review|
     json.score review.score
     json.body review.body
     json.owner_name review.owner.f_name + " " + review.owner.l_name
     json.owner_profile_pic review.owner.profile_image_url
     json.created_at time_ago_in_words(review.created_at) + " ago"
end
