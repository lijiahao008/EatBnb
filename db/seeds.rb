# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create(email: "123@gmail.com", password: "password", f_name: "James", l_name: "Bond", description: "I'm a self-taught chef who has been working at a 5 star hotel for the past 6 years. Please feel free to contact me directly here.", host: true)

User.create(email: "1234@gmail.com", password: "password", f_name: "Howard", l_name: "Hall", description: "His upright nature though, this is what he's often adored for. People regularly count on this and his sense of order whenever they need assistance or help.", host: true, profile_image: open("https://lh3.googleusercontent.com/IcoKsmcNorkWu8lBns2o_80PRJFrP-avGz7-bX00MhFEGm3Kpw"))


Menu.destroy_all
Menu.create(title: 'Korean Fried Chicken', description: "The BEST Korean fried chicken recipe that yields crispy fried chicken in spicy, savory and sweet sauce.", price: 20, address: "9 St Marks Pl D, New York, NY 10003", owner_id: User.first.id, picture: open( "http://www.monnylam.com/wp-content/uploads/2015/09/IMG_3479-1080x810.jpg"))

Menu.create(title: 'Korean BBQ', description: "Chic, zen-like Koreatown restaurant for barbecue, bulgogi and hot pots.", price: 30, address: "10 W 32nd St, New York, NY 10001", owner_id: User.first.id, picture: open( "https://i.ytimg.com/vi/E7E4DdDsZqU/maxresdefault.jpg"))

Menu.create(title: 'Westside Steak', description: "Unpretentious neighborhood steak & seafood restaurant with a vibe that blends modern & traditional.", price: 40, address: "597 10th Ave, New York, NY 10036", owner_id: User.first.id, picture: open( "http://pixel.nymag.com/imgs/daily/grub/2016/04/07/09-the-dutch-steak.w710.h473.jpg"))

Menu.create(title: 'Super Juice', description: "Modern, counter-serve chain offering juices & smoothies, plus raw foods, muffins & vegan soups.", price: 7, address: "122 E 42nd St, New York, NY 10017", owner_id: User.last.id, picture: open( "http://www.franchiseindia.com/uploads/content/fi/art/how-to-start-a-juice-business-24-2ec7112dc9.jpg"))

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



MenuReview.destroy_all
MenuReview.create(score: 3, body:"Best food ever!!", menu_id: Menu.first.id, owner_id: User.first.id)

MenuReview.create(score: 4, body:"I love the seafood.", menu_id: Menu.last.id - 5, owner_id: User.last.id)

MenuReview.create(score: 3, body:"My favorite spot.", menu_id: Menu.first.id + 2, owner_id: User.last.id)

MenuReview.create(score: 4, body:"Best place to a party!", menu_id: Menu.last.id, owner_id: User.first.id)

MenuReview.create(score: 5, body:"I love this place!!!", menu_id: Menu.last.id - 2, owner_id: User.last.id)

MenuReview.create(score: 2, body:"I guess the food is ok.", menu_id: Menu.first.id + 2, owner_id: User.first.id)

MenuReview.create(score: 1, body:"I hate this place, the waiter is so rude.", menu_id: Menu.last.id - 1, owner_id: User.first.id)

MenuReview.create(score: 5, body:"I like this place so much.", menu_id: Menu.last.id - 3, owner_id: User.last.id)

MenuReview.create(score: 4, body:"This is the best spot in the neighborhood", menu_id: Menu.last.id - 2, owner_id: User.last.id)

MenuReview.create(score: 5, body:"This is my favorite place to eat dinner.", menu_id: Menu.last.id - 1, owner_id: User.last.id)

MenuReview.create(score: 5, body:"This is my favorite place to eat lunch.", menu_id: Menu.last.id - 3, owner_id: User.last.id)

MenuReview.create(score: 5, body:"I love the music and the food here.", menu_id: Menu.last.id - 4, owner_id: User.last.id)

MenuReview.create(score: 1, body:"I have no idea how this place is still in business.", menu_id: Menu.first.id + 3, owner_id: User.first.id)

MenuReview.create(score: 1, body:"The worst place I have ever been.", menu_id: Menu.last.id - 5, owner_id: User.last.id)

MenuReview.create(score: 4, body:"The food was amazing!!", menu_id: Menu.first.id + 4, owner_id: User.first.id)

MenuReview.create(score: 3, body:"I love the music here.", menu_id: Menu.last.id - 4, owner_id: User.last.id)

MenuReview.create(score: 5, body:"My favorite spot for breakfast.", menu_id: Menu.first.id + 3, owner_id: User.last.id)

MenuReview.create(score: 5, body:"Best place to a birthday party!", menu_id: Menu.last.id - 2, owner_id: User.first.id)

MenuReview.create(score: 5, body:"I love their food so much!!!", menu_id: Menu.last.id - 6, owner_id: User.last.id)

MenuReview.create(score: 1, body:"I really didn't like the food.", menu_id: Menu.first.id + 7, owner_id: User.first.id)

MenuReview.create(score: 3, body:"The food was a little bit salty.", menu_id: Menu.last.id - 5, owner_id: User.first.id)

MenuReview.create(score: 5, body:"I like this place so much.", menu_id: Menu.last.id - 4, owner_id: User.last.id)

MenuReview.create(score: 4, body:"This place serve the best dessert", menu_id: Menu.last.id - 2, owner_id: User.last.id)

MenuReview.create(score: 1, body:"My food was really cold.", menu_id: Menu.last.id - 1, owner_id: User.last.id)

MenuReview.create(score: 1, body:"This is the worst place I have ever been.", menu_id: Menu.last.id - 3, owner_id: User.last.id)

MenuReview.create(score: 4, body:"I love the food but not too much the music.", menu_id: Menu.last.id, owner_id: User.last.id)

MenuReview.create(score: 3, body:"This place is not really authentic.", menu_id: Menu.first.id + 7, owner_id: User.first.id)

MenuReview.create(score: 2, body:"The food was not as I expected.", menu_id: Menu.last.id - 8, owner_id: User.last.id)

Reservation.destroy_all
Reservation.create(date: DateTime.new(2015, 6, 22), confirmed: true, owner_id: User.first.id, menu_id: Menu.first.id)

Reservation.create(date: DateTime.new(2016, 6, 22), confirmed: true, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2015, 7, 28), confirmed: false, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2016, 3, 12), confirmed: true, owner_id: User.first.id, menu_id: Menu.first.id)

Reservation.create(date: DateTime.new(2017, 6, 22), confirmed: true, owner_id: User.first.id, menu_id: Menu.first.id)

Reservation.create(date: DateTime.new(2017, 8, 22), confirmed: true, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2017, 9, 28), confirmed: false, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2017, 2, 12), confirmed: true, owner_id: User.first.id, menu_id: Menu.first.id)

Reservation.create(date: DateTime.new(2017, 6, 22), confirmed: true, owner_id: User.first.id, menu_id: Menu.first.id)

Reservation.create(date: DateTime.new(2017, 6, 22), confirmed: true, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2017, 7, 28), confirmed: false, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2017, 3, 12), confirmed: true, owner_id: User.first.id, menu_id: Menu.first.id)

Reservation.create(date: DateTime.new(2017, 6, 22), confirmed: true, owner_id: User.first.id, menu_id: Menu.first.id)

Reservation.create(date: DateTime.new(2017, 8, 22), confirmed: true, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2017, 9, 28), confirmed: false, owner_id: User.first.id, menu_id: Menu.last.id)

Reservation.create(date: DateTime.new(2017, 2, 12), confirmed: true, owner_id: User.first.id, menu_id: Menu.first.id)
