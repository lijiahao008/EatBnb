
import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

export default App;
