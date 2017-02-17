import React from 'react';
import RecomendedMenusContainer from './recomended_menus_container';
import TopRatedMenusContainer from './top_rated_menus_container';

const Home = (props) => {
  return (
    <main>
      <div className="container">
        <div className="row homeSearchBar">
          <div className="col-lg-8">
            <h1>Welcome to EatBnb</h1>
            <h2>The 21 century's solution for an authentic meal experience.</h2>
          </div>
        </div>
        <div className="row homeRecomendedMenus">
          <div className="col-lg-12">
            <h3>Recomended Menus</h3>
              <RecomendedMenusContainer />
          </div>
        </div>
        <div className="row homeTopRatedMenus">
          <div className="col-lg-12">
            <h3>Top Rated Menus</h3>
              <TopRatedMenusContainer />
          </div>
        </div>
      </div>
    </main>

  );
};

export default Home;
