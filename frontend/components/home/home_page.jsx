import React from 'react';
import ReactDOM from 'react-dom';
import RecomendedMenusContainer from './recomended_menus_container';
import TopRatedMenusContainer from './top_rated_menus_container';
import HomeSearchBarContainer from './home_search_bar_container';


const Home = (props) => {
  return (
    <main>
      <div className="container">
        <div className="row homeSearchBar">
          <div className="col-lg-8">
            <h1>Welcome to EatBnb</h1>
            <h2>The 21 century's solution for an authentic meal experience.</h2>
          </div>
          <div>
            <HomeSearchBarContainer />
          </div>
        </div>
        <div className="row homeRecomendedMenus">
          <div>
            <h3>Recomended Menus</h3>
              <RecomendedMenusContainer />
          </div>
        </div>
        <div className="row homeTopRatedMenus">
          <h3>Top Rated Menus</h3>
          <TopRatedMenusContainer />
        </div>
      </div>
    </main>

  );
};

export default Home;
