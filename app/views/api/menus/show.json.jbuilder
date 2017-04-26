json.id @menu.id
json.title @menu.title
json.description @menu.description
json.price @menu.price
json.address @menu.address.upcase
json.average_rating @menu.average_rating
json.picture_url asset_path(@menu.picture.url)
json.owner_name @menu.owner.f_name + " " + @menu.owner.l_name
json.owner_description @menu.owner.description
json.owner_member_since @menu.owner.created_at.strftime("%B %Y")
json.owner_profile_pic asset_path(@menu.owner.profile_image.url)
json.reviews @menu.reviews.each do |review|
    json.id review.id
    json.score review.score
    json.body review.body
    json.owner_name review.owner.f_name + " " + review.owner.l_name
    json.owner_profile_pic asset_path(review.owner.profile_image.url)
    json.created_at time_ago_in_words(review.created_at) + " ago"
end
