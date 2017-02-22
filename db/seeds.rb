# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Menu.destroy_all
Menu.create(title: 'Korean Fried Chicken', description: "The BEST Korean fried chicken recipe that yields crispy fried chicken in spicy, savory and sweet sauce.", price: 20, address: "9 St Marks Pl D, New York, NY 10003", average_rating: 4, owner_id: 1)

Menu.create(title: 'Korean BBQ', description: "Chic, zen-like Koreatown restaurant for barbecue, bulgogi and hot pots.", price: 30, address: "10 W 32nd St, New York, NY 10001", average_rating: 3, owner_id: 1)

Menu.create(title: 'Westside Steak', description: "Unpretentious neighborhood steak & seafood restaurant with a vibe that blends modern & traditional.", price: 40, address: "597 10th Ave, New York, NY 10036", average_rating: 5, owner_id: 1)

Menu.create(title: 'Super Juice', description: "Modern, counter-serve chain offering juices & smoothies, plus raw foods, muffins & vegan soups.", price: 7, address: "122 E 42nd St, New York, NY 10017", average_rating: 5, owner_id: 1)

Menu.create(title: 'Maialino', description: "Classic Roman-Italian soul food in an a casual but elegant setting.", price: 70, address: "Gramercy Park Hotel, 2 Lexington Ave, New York, NY 10010", average_rating: 5, owner_id: 1)

Menu.create(title: 'Trattoria Trecolori', description: "Bustling Italian spot serving classic red-sauce dishes in a warm space with exposed brick.", price: 40, address: "254 W 47th St, New York, NY 10036", average_rating: 4, owner_id: 1)

Menu.create(title: 'Gradisca', description: "All of the pasta is handmade at this sophisticated, seasonal Italian restaurant.", price: 60, address: "126 W 13th St, New York, NY 10011", average_rating: 4, owner_id: 1)

Menu.create(title: 'Skinner Loft', description: "Charming, upscale-casual restaurant & bar with a New American menu, craft brews & rooftop dining.", price: 200, address: "146 Newark Ave, Jersey City, NJ 07302", average_rating: 4, owner_id: 1)

Menu.create(title: 'Battello', description: "Waterfront Italian spot serving lunch, dinner & brunch, known for harbor views & a late-night bar.", price: 20, address: "502 Washington Blvd, Jersey City, NJ 07310", average_rating: 4, owner_id: 1)

Menu.create(title: 'GP', description: "Spin-off of a longtime Italian joint serving old-school fare in a warm, midcentury setting.", price: 90, address: "236 Pavonia Ave, Jersey City, NJ 07102", average_rating: 4, owner_id: 1)

Menu.create(title: 'Night of Joy
', description: "Herbal infusions star in the elaborate cocktails at this antiques-filled lounge with a roof patio.", price: 30, address: "667 Lorimer St, Brooklyn, NY 11211", average_rating: 4, owner_id: 1)


MenuReview.destroy_all
MenuReview.create(score: 3, body:"Best food ever!!", menu_id: Menu.first.id, owner_id: 1)

MenuReview.create(score: 4, body:"I love the seafood.", menu_id: Menu.last.id, owner_id: 1)

MenuReview.create(score: 3, body:"My favorite spot.", menu_id: Menu.first.id, owner_id: 1)

MenuReview.create(score: 4, body:"Best place to a party!", menu_id: Menu.last.id, owner_id: 1)

MenuReview.create(score: 5, body:"I love this place!!!", menu_id: Menu.last.id, owner_id: 1)

MenuReview.create(score: 2, body:"I guess the food is ok.", menu_id: Menu.first.id, owner_id: 1)

MenuReview.create(score: 1, body:"I hate this place, the waiter is so rude.", menu_id: Menu.last.id, owner_id: 1)
