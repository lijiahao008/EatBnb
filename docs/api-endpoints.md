# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` - create new user
- `PATCH /api/users` - update user info
- `GET /api/users/:id` - fetch user details for user profile

### Session

- `POST /api/session` - log in user
- `DELETE /api/session` - log out user

### Home
- `GET /` - if not logged in, render landing page, otherwise render menus_index page

### Menus/Seach

- `GET /api/menus`
  - menus index/search actions
- `PATCH /api/menus` - edit a menu
- `GET /api/menus/:menuId` - fetch one menu
- `POST /api/menus` - create menu
- `DELETE /api/menus/:menuId` - delete a menu

### Hosts/Seach

- `GET /api/hosts`
  - hosts index/search actions
- `GET /api/hosts/:hostId` - fetch one host

### Reservations

- `GET /api/reservations` - fetches all reservations for guest
- `POST /api/reservations` - create a reservation
