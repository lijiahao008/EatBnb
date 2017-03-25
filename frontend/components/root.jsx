import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import HomePage from './home/home_page';
import MenuShowContainer from './menus/menu_show_container';
import MenuFormContainer from './menus/menu_form_container';
import UserEditFormContainer from './user/user_edit_form_container';
import SearchContainer from './search/search_container';
import MyMenusContainer from './menus/my_menus_container';
import MyReservationsContainer from './reservations/my_reservations_container';
import ConversationsContainer from './conversations/conversations_container';
import ConversationContainer from './conversations/conversation_container';


const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage} />
          <Route path="/users/:userId/edit" component={UserEditFormContainer} />
          <Route path="/menus/new"
            component={MenuFormContainer} />
          <Route path="/menus/:menuId/edit"
            component={MenuFormContainer} />
          <Route path="/menus/:menuId"
            component={MenuShowContainer} />
          <Route path="/search" component={SearchContainer} />
          <Route path="/myMenus" component={MyMenusContainer} />
          <Route path="/myReservations" component={MyReservationsContainer} />
          <Route path="/conversations" component={ConversationsContainer} />
          <Route path="/conversations/:conversationId" component={ConversationContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
