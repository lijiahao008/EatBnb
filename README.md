# EatBnb

![home]

[EatBnb][eatbnb]


## Summary

[EatBnb][eatbnb] is a full-stack web application built using Ruby on Rails
utilizing React.js/flux architecture. EatBnb allows users to:

* Create an account
* Log in / Log out
* Create and update profile
* Add, edit and delete their listing menus
* Review other listing menus
* Create or cancel a reservation for a menu listing
* View user's own listings and reservations
* Search for available menu listings based on location and price

## Overall Structure

#### Back end
Ruby on Rails is used as the back end together with postgreSQL as the database. All data requests are being made through AJAX requests and responded in JSON format. Associations are used to eliminate N + 1 queries for faster database performance.

#### Front end

The front end is built in [React.js][React] and JavaScript and utilizes React's [Flux][Flux] architecture as well as bootstrap css framework for cross devices support. React's virtual DOM allows for fast rerendering without redirecting to new pages on the server side.

#### Libraries

EatBnb uses:
- [React.js][React]
- [Flux][Flux]
- [react-slick][React-slick]
- [react-coverflow][react-coverflow]
- [BCrypt](https://github.com/codahale/bcrypt-ruby) for authorization
- [Geocoder](https://github.com/alexreisner/geocoder) to easily convert address strings into latitude and longitude.
- [react-infinite][react-infinite] to enable infinite scroll feature
- [react-dropzone](https://github.com/okonet/react-dropzone) enable the drag and drop file upload feature

## Primary Components

![home]

#### User Authorization
Backend uses BCrypt for password hashing. Passwords are not saved to the database, only password hashes are. When users log in, a random session-token is created and will be used for verifying the current user later.

![signin]


#### Personal Accounts
Here user can change their account information such as first name, last name, email and description etc. This will be the main interface that user interact with their account.

![user-profile]

#### Create a new Menu
Being able to create menus are the most important part of EatBnb which enables users to search and reserve listings that fit their preference.

![create-menu]

#### Search
EatBnb gives you the ability to search listings based on location, price and keywords. It will also present your search results on google map with custom markers.

![search]

[eatbnb]: https://eatbnb.herokuapp.com/
[react-slick]:https://github.com/akiran/react-slick
[react-coverflow]:http://andyyou.github.io/react-coverflow/
[react-infinite]:https://github.com/seatgeek/react-infinite
[React]:https://facebook.github.io/react/
[Flux]:https://facebook.github.io/flux/



[signin]: ./app/assets/images/sign-in.jpg
[create-menu]: ./app/assets/images/create-menu.jpg
[user-profile]: ./app/assets/images/user-prodile.jpg
[search]: ./app/assets/images/search.jpg
[home]: ./app/assets/images/home.jpg
