import React from 'react';
import RecomendedMenusContainer from './recomended_menus_container';
import TopRatedMenusContainer from './top_rated_menus_container';

const Home = (props) => {
  return (
    <main>
      <section>
        <h1>Welcome to EatBnb</h1>
        <h2>The 21 century's solution for an authenticate meal experience</h2>
      </section>


      <section>
        <h2>Recomended Menus</h2>
          <RecomendedMenusContainer />
        <h2>Top Rated Menus</h2>
        <TopRatedMenusContainer />
      </section>
    </main>

  );
};

export default Home;
