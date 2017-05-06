# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Menu.destroy_all
Menu.create(title: 'Korean Fried Chicken', description: "The BEST Korean fried chicken recipe that yields crispy fried chicken in spicy, savory and sweet sauce.", price: 20, address: "9 St Marks Pl D, New York, NY 10003", owner_id: User.first.id, picture: open( "http://www.monnylam.com/wp-content/uploads/2015/09/IMG_3479-1080x810.jpg"))

Menu.create(title: 'Korean BBQ', description: "Chic, zen-like Koreatown restaurant for barbecue, bulgogi and hot pots.", price: 30, address: "10 W 32nd St, New York, NY 10001", owner_id: User.first.id, picture: open( "https://i.ytimg.com/vi/E7E4DdDsZqU/maxresdefault.jpg"))

Menu.create(title: 'Westside Steak', description: "Unpretentious neighborhood steak & seafood restaurant with a vibe that blends modern & traditional.", price: 40, address: "597 10th Ave, New York, NY 10036", owner_id: User.first.id, picture: open( "http://pixel.nymag.com/imgs/daily/grub/2016/04/07/09-the-dutch-steak.w710.h473.jpg"))

Menu.create(title: 'Super Juice', description: "Modern, counter-serve chain offering juices & smoothies, plus raw foods, muffins & vegan soups.", price: 7, address: "122 E 42nd St, New York, NY 10017", owner_id: User.last.id, picture: open( "https://www.franchiseindia.com/uploads/content/fi/art/how-to-start-a-juice-business-24-2ec7112dc9.jpg"))

Menu.create(title: 'Maialino', description: "Classic Roman-Italian soul food in an a casual but elegant setting.", price: 70, address: "Gramercy Park Hotel, 2 Lexington Ave, New York, NY 10010", owner_id: User.first.id, picture: open( "http://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/3/9f/39f5851d-2ddc-5705-9dba-16e358d838b9/57969eed703a2.image.jpg?resize=1200%2C805"))

Menu.create(title: 'Trattoria Trecolori', description: "Bustling Italian spot serving classic red-sauce dishes in a warm space with exposed brick.", price: 40, address: "254 W 47th St, New York, NY 10036", owner_id: User.first.id, picture: open("https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2012/10/Food.jpg"))

Menu.create(title: 'Gradisca', description: "All of the pasta is handmade at this sophisticated, seasonal Italian restaurant.", price: 60, address: "126 W 13th St, New York, NY 10011", owner_id: User.first.id, picture: open( "http://www.silverspoonlondon.co.uk/wp-content/uploads/2015/07/DSC_2887.jpg"))

Menu.create(title: 'Skinner Loft', description: "Charming, upscale-casual restaurant & bar with a New American menu, craft brews & rooftop dining.", price: 200, address: "146 Newark Ave, Jersey City, NJ 07302", owner_id: User.first.id, picture: open( "http://media.salon.com/2013/10/shutterstock_115383397-1280x960.jpg"))

Menu.create(title: 'Battello', description: "Waterfront Italian spot serving lunch, dinner & brunch, known for harbor views & a late-night bar.", price: 20, address: "502 Washington Blvd, Jersey City, NJ 07310", owner_id: User.last.id, picture: open("http://healtheatingfood.com/wp-content/uploads/2016/04/functional-food.jpg"))

Menu.create(title: 'Upstate', description: "Spin-off of a longtime Italian joint serving old-school fare in a warm, midcentury setting.", price: 90, address: "236 Pavonia Ave, Jersey City, NJ 07102", owner_id: User.first.id, picture: open("http://article.images.consumerreports.org/prod/content/dam/cro/news_articles/health/CR-Health-Crop-Food-Child-10-16"))

Menu.create(title: 'Night of Joy
', description: "Herbal infusions star in the elaborate cocktails at this antiques-filled lounge with a roof patio.", price: 30, address: "667 Lorimer St, Brooklyn, NY 11211", owner_id: User.last.id, picture: open("https://exercisearchive.files.wordpress.com/2017/01/high_fibre-food.jpg"))

Menu.create(title: 'Hu Kitchen', description: "Veggie-oriented gluten-free eatery offering juices, bowls, soups & mains, many of them organic.", price: 100, address: "78 5th Ave, New York, NY 10011", owner_id: User.last.id, picture: open("https://truffle-assets.imgix.net/pxqrocxwsjcc_3xvZs3UYgMqmse8I2qugEU_Ramen%20Burger%20Thumbnail%201920x1080.png.jpg"))

Menu.create(title: 'Veselka', description: "Borscht & pierogi are menu highlights at this cheap, no-frills Ukrainian eatery open 24 hours a day.", price: 50, address: "144 2nd Ave, New York, NY 10003", owner_id: User.first.id, picture: open("http://greentourua.com/wp-content/uploads/2015/05/borsch3.jpg"))

Menu.create(title: 'Blue Hill', description: "Locally sourced, seasonal ingredients abound on the American menu served at this townhouse-set spot.", price: 50, address: "75 Washington Pl, New York, NY 10011", owner_id: User.last.id, picture: open("http://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2014/05/fourth-july-picnic-english-vocabulary-american-food2.jpg"))

Menu.create(title: 'Tartine Bakery', description: "Organic ingredients provide the makings for breakfast pastries, hot pressed sandwiches & coffee.", price: 35, address: "600 Guerrero St, San Francisco, CA 94110", owner_id: User.last.id, picture: open("https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040_960_720.jpg"))

Menu.create(title: 'Thorough Bread and Pastry', description: "Bright shop with exposed brick & patio selling baked goods & light fare from cookies to sandwiches.", price: 15, address: "248 Church St, San Francisco, CA 94114", owner_id: User.last.id, picture: open("http://eskipaper.com/images/pastry-wallpaper-4.jpg"))

Menu.create(title: 'Outerlands', description: "Cozy place with weathered-wood walls serving New American eats, housemade bread & a popular brunch.", price: 115, address: "4001 Judah St, San Francisco, CA 94122", owner_id: User.last.id - 1, picture: open("https://www.catamaranresort.com/sites/default/files/banner-dine-sunday-champagne-brunch.jpg"))

Menu.create(title: 'St. Francis Fountain', description: "Classic soda fountain founded in 1918 featuring diner fare, milkshakes & a vintage candy counter.", price: 215, address: "2801 24th St, San Francisco, CA 94110", owner_id: User.first.id + 1, picture: open("http://assets.marthastewart.com/styles/wmax-520-highdpi/d35/EH0162-Blueberry%20Buttermilk%20Waffles/EH0162-Blueberry%20Buttermilk%20Waffles.jpg?itok=_R_NanZW"))

Menu.create(title: 'Nicks Crispy Tacos', description: "Known for its signature 2-tortilla tacos, this Mexican restaurant also has a vibrant bar scene.", price: 315, address: "1500 Broadway, San Francisco, CA 94109", owner_id: User.first.id + 1, picture: open("https://greatist.com/sites/default/files/steak-tacos-with-chimichurri-sauce-1.jpg"))

Menu.create(title: 'Palace Bar', description: "Long-running gay fixture known for weekend drag shows, plus all-day breakfast & bar-food menu.", price: 315, address: "1200 Ocean Dr, Miami Beach, FL 33139", owner_id: User.last.id, picture: open("https://static1.squarespace.com/static/55b5793fe4b051ab94c180a8/t/565b1f46e4b0c668da661db7/1448812360904/breakfast.jpg?format=1500w"))

Menu.create(title: 'Puerto Sagua', description: "No pretensions, no frills, just comfort-food staples like Cuban sandwich & ropa vieja since 1962. ", price: 300, address: "700 Collins Ave, Miami Beach, FL 33139", owner_id: User.last.id, picture: open("http://cdn.skim.gs/images/hisyr4wfw6syle4sjdpd/cuban-sandwich-recipe"))

Menu.create(title: 'Yuca', description: "Festive, fashionable eatery offering live Latin music, salsa-dancing classes & people-watching.", price: 200, address: "501 Lincoln Rd, Miami Beach, FL 33139", owner_id: User.first.id, picture: open("http://food.unl.edu/NEP/NEP%20Images/150615_food_283.jpg"))

Menu.create(title: 'Salsa Fiesta', description: "Upmarket fast-food spot preparing tacos & burritos topped with made-to-order salsas.", price: 250, address: "2929 Biscayne Blvd, Miami, FL 33137
", owner_id: User.first.id, picture: open("http://www.primalrevolutions.com/wp-content/uploads/2015/11/Wishart-TheOnlySalsa-7J2C3037-1480x960.jpg"))



MenuReview.destroy_all
MenuReview.create(score: 3, body:"Best food ever!!", menu_id: Menu.first.id, owner_id: User.first.id)

MenuReview.create(score: 4, body:"I love the seafood.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 3, body:"My favorite spot.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 4, body:"Best place to a party!", menu_id: Menu.last.id, owner_id: User.first.id)

MenuReview.create(score: 5, body:"I love this place!!!", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 2, body:"I guess the food is ok.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.first.id)

MenuReview.create(score: 1, body:"I hate this place, the waiter is so rude.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.first.id)

MenuReview.create(score: 5, body:"I like this place so much.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 4, body:"This is the best spot in the neighborhood", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 5, body:"This is my favorite place to eat dinner.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 5, body:"This is my favorite place to eat lunch.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 5, body:"I love the music and the food here.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 1, body:"I have no idea how this place is still in business.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.first.id)

MenuReview.create(score: 1, body:"The worst place I have ever been.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 4, body:"The food was amazing!!", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.first.id)

MenuReview.create(score: 3, body:"I love the music here.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 5, body:"My favorite spot for breakfast.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 5, body:"Best place to a birthday party!", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.first.id)

MenuReview.create(score: 5, body:"I love their food so much!!!", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 1, body:"I really didn't like the food.", menu_id: Menu.first.id, owner_id: User.first.id)

MenuReview.create(score: 3, body:"The food was a little bit salty.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.first.id)

MenuReview.create(score: 5, body:"I like this place so much.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 4, body:"This place serve the best dessert", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 1, body:"My food was really cold.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 1, body:"This is the worst place I have ever been.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 4, body:"I love the food but not too much the music.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 3, body:"This place is not really authentic.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.first.id)

MenuReview.create(score: 2, body:"The food was not as I expected.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 4, body:"You have to try the soup special!", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 4, body:"This place serve the best dessert", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 1, body:"My food was really cold.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 1, body:"This is the worst place I have ever been.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 4, body:"I love the food but not too much the music.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

MenuReview.create(score: 3, body:"This place is not really authentic.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.first.id)

MenuReview.create(score: 2, body:"The food was not as I expected.", menu_id: Menu.first.id + rand(Menu.count), owner_id: User.last.id)

Reservation.destroy_all
Reservation.create(date: DateTime.new(2015, 6, 22), confirmed: true, owner_id: User.first.id, menu_id: Menu.first.id)

Reservation.create(date: DateTime.new(2016, 6, 22), confirmed: true, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2015, 7, 28), confirmed: false, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2016, 3, 12), confirmed: true, owner_id: User.first.id, menu_id: Menu.first.id)

Reservation.create(date: DateTime.new(2017, 6, 22), confirmed: true, owner_id: User.first.id, menu_id: Menu.first.id)

Reservation.create(date: DateTime.new(2017, 8, 22), confirmed: true, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2017, 9, 28), confirmed: false, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2017, 2, 12), confirmed: true, owner_id: User.last.id, menu_id: Menu.first.id)

Reservation.create(date: DateTime.new(2017, 6, 22), confirmed: true, owner_id: User.last.id, menu_id: Menu.first.id)

Reservation.create(date: DateTime.new(2017, 6, 22), confirmed: true, owner_id: User.last.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2017, 7, 28), confirmed: false, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2017, 3, 12), confirmed: true, owner_id: User.first.id, menu_id: Menu.first.id)

Reservation.create(date: DateTime.new(2017, 6, 22), confirmed: true, owner_id: User.first.id, menu_id: Menu.first.id)

Reservation.create(date: DateTime.new(2017, 8, 22), confirmed: true, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2017, 9, 28), confirmed: false, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2017, 2, 12), confirmed: true, owner_id: User.first.id, menu_id: Menu.first.id)
