json.id @menu_review.id
json.score @menu_review.score
json.body @menu_review.body
json.owner_name @menu_review.owner.f_name + " " + @menu_review.owner.l_name
json.owner_profile_pic @menu_review.owner.profile_image_url
json.created_at time_ago_in_words(@menu_review.created_at) + " ago"
