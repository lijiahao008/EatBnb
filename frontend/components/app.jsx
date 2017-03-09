
import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomePage from './home/home_page';

// import HomePage from './home/home_page';

const App = ({ children }) => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    {children}
  </div>
);

export default App;
