# EatBnb

![home]

[SEE IT IN ACTION LIVE HERE!][eatbnb]


## Summary

[EatBnb][eatbnb] is a full-stack web application built using Ruby on Rails
utilizing React.js/flux architecture. EatBnb allows users to:

* Create an account
* Log in / Log out
* Use facebook or google account to Log in / Sign Up
* Create and update profile
* Add, edit and delete their listing menus
* Review other listing menus
* Create or cancel a reservation for a menu listing
* View user's own listings and reservations
* Search for available menu listings based on location and price
* Send messages to other users and start a group conversation

## Overall Structure

#### Back end
Ruby on Rails is used as the back end together with postgreSQL as the database. All data requests are being made through AJAX requests and responded in JSON format. Associations are used to eliminate N + 1 queries for faster database performance. Example:

````ruby
  def show
    @menu = Menu.includes(:owner, [{reviews: :owner}]).find(params[:id])
    @reviews = @menu.reviews
  end
````

#### Front end

The front end is built in [React.js][React] and JavaScript and utilizes React's [Flux][Flux] architecture as well as bootstrap css framework for cross devices support. React's virtual DOM allows for fast rerendering without redirecting to new pages on the server side.

#### Libraries

EatBnb uses:
- [React.js][React]
- [Flux][Flux]
- [BCrypt](https://github.com/codahale/bcrypt-ruby) for authorization
- [Geocoder](https://github.com/alexreisner/geocoder) to easily convert address strings into latitude and longitude.
- [react-dropzone](https://github.com/okonet/react-dropzone) enable the drag and drop file upload feature

## Primary Components

#### Responsive Grid System
EatBnb utilizes the Bootstrap framework to implement a responsive design through out the entire site. Below is an example for the home page.

![home-responsive]

#### User Authorization
Backend uses BCrypt for password hashing. Passwords are not saved to the database, only password hashes are. When users log in, a random session-token is created and will be used for verifying the current user later.

![signin]


Front-end Authentication is done through bootstrapping the current user via javascript and embedded ruby. Example:

````javascript
  <script id="bootstrap-current-user" type="text/javascript">
    <% if logged_in? %>
    	window.currentUser = <%= render("api/users/user.json.jbuilder",
    		user: current_user).html_safe %>
    <% end %>
    window.images = {
      spoon: "<%= image_path("spoon.png") %>"
    }
  </script>
````

#### Third Party Authorization
Users can also sign up and log in to EatBnb using their facebook or google account. EatBnb will ask for permission to access their social accounts and automatically store their facebook or google public profile information and create a local account for the user. EatBnb utilizes the Oauth2 standard and below is the example code for user model.

````ruby
  def self.from_omniauth(auth_hash)
    user = User.find_by(uid: auth_hash['uid'], provider: auth_hash['provider'])
    if user
      user
    else
      user = User.new
      user.provider = auth_hash['provider']
      user.uid = auth_hash['uid']
      user.email = auth_hash['info']['email']
      user.password = auth_hash['uid'] + auth_hash['info']['name']
      user.f_name = auth_hash['info']['first_name'] || ""
      user.l_name = auth_hash['info']['last_name'] || ""
      user.profile_image_from_url(auth_hash['info']['image'])
      user.save!
      user
    end
  end
````

![facebook]

#### Personal Accounts
Here user can change their account information such as first name, last name, email and description etc. This will be the main interface that user interact with their account.

![user-profile]

#### Create a new Menu
Being able to create menus are the most important part of EatBnb which enables users to search and reserve listings that fit their preference.

![create-menu]

#### Search
EatBnb gives you the ability to search listings based on location, price and keywords. It will also present your search results on google map with custom markers.

![search]

#### Messages and Live Chat
EatBnb also has a built-in messaging system with a live chat feature. Users are able to send messages to the other users, move conversation to trash, check sent messages, start a group conversation and start a live chat as requested.

![messages]

[eatbnb]: https://eatbnb.herokuapp.com/
[react-infinite]:https://github.com/seatgeek/react-infinite
[React]:https://facebook.github.io/react/
[Flux]:https://facebook.github.io/flux/



[signin]: ./app/assets/images/sign-in.jpg
[create-menu]: ./app/assets/images/create-menu.jpg
[facebook]: ./app/assets/images/facebook.jpg
[user-profile]: ./app/assets/images/user-profile.jpg
[search]: ./app/assets/images/search.jpg
[home-responsive]: ./app/assets/images/home.gif
[home]: ./app/assets/images/home.jpg
[messages]: ./app/assets/images/messages.jpg
