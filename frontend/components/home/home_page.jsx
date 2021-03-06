import React from 'react';
import ReactDOM from 'react-dom';
import RecommendedMenusContainer from './recommended_menus_container';
import TopRatedMenusContainer from './top_rated_menus_container';
import HomeSearchBarContainer from './home_search_bar_container';


const Home = (props) => {
  return (
      <div className="container">
        <div className="row homeSearchBar">
          <div className="home-title">
            <h1>Welcome to EatBnb</h1>
            <h2>The 21 century's solution for an authentic meal experience.</h2>
          </div>
          <HomeSearchBarContainer />
        </div>
        <div className="row homeRecommendedMenus">
          <h3>Recommended Menus</h3>
          <RecommendedMenusContainer />
        </div>
        <div className="row homeTopRatedMenus">
          <h3>Top Rated Menus</h3>
          <TopRatedMenusContainer />
        </div>
      </div>

  );
};

export default Home;
