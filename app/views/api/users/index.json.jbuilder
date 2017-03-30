@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.name user.f_name + " " + user.l_name
    json.email user.email
  end
end
