import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import MenuIndexContainer from './menus/menu_index_container';
import MenuShowContainer from './menus/menu_show_container';


const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={MenuIndexContainer} />
          <Route path="/menus/:menuId" component={MenuShowContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
