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
