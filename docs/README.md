# EatBnb

[Heroku link][heroku]

[Trello link][trello]



## Minimum Viable Product
EatBnb is a service which provides an alternative to dining out with a home cooked meal experience. It uses Ruby on Rails as backend and React/Redux as front-end. This app will be made with smooth, bug-free navigation, seeded data, and modern CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login.
- [ ] A production README
- [ ] Create and search Menus & Google Maps on search
- [ ] Reservations
- [ ] Ratings/reviews
- [ ] Infinite Scroll


## Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ../docs/wireframes
[components]: ../docs/component-hierarchy.md
[sample-state]: ../docs/sample-state.md
[api-endpoints]: ../docs/api-endpoints.md
[schema]: ../docs/schema.md

## Implementation Timeline

### Phase 1: Backend and Front End User Authentication (2 days)
**Objective:** Rails project setup with back-end and front-end Authentication.
* The nav-bar will contain the name and icon, sign up, and sign in
buttons.
* Website name and icon will link to the homepage.
* Sign up or sign in buttons will render authentication forms.

### Phase 2: Menus List and Hosts Index (2 days)

**Objective:** List of menus and hosts index page.
* Homepage should have list of available menus.
* Hosts index page will display an image, name, category, and price.
* Uses infinite scroll feature.
* Uses google map to show locations of hosts.

### Phase 3: Menu Details Page (1 days)

**Objective:** Functional core of details page.
* Details page will include description and photos.
* Details page will link to host's profile.


### Phase 4: Reviews (2 days)

**Objective:** Users can review on menu's and host's detail page.
* Review form will include a body and 1 to 5 star ratings.
* User can only review after transaction was complete.

### Phase 5: Reservations (2 day)

**Objective:** Guests can search and reserve based on host's availability.
* Availability will be shown on the detail page and search form.
* Reservation form will include number of guests and date.

### Phase 6: - Guests and Hosts Profiles (2 day)

**Objective:** Guests has access to a profile page.
* Profile page shows reviews and scores.

### Bonus Features (TBD)
- [ ] Suggest menu and hosts based on users reservation history
- [ ] Message index and conversation show pages
