import React from 'react';
import Coverflow from 'react-coverflow';
import { Link, hashHistory } from 'react-router';
import {StyleRoot} from 'radium';


class RecomendedMenus extends React.Component {
  componentDidMount() {
    this.props.fetchMenus();
  }

  render () {
    return (
    <StyleRoot>
      <Coverflow width="auto" height="auto"
        displayQuantityOfSide={2}
        navigation={true}
        enableScroll={false}
        clickable={true}
        active={4}
        media={{
         '@media (max-width: 900px)': {
           width: '80%',
           height: '250px',
           background: 'white'
         },
         '@media (min-width: 900px)': {
           width: '80%',
           height: '350px',
           background: 'white'
         }
       }}
        >
        {
          this.props.menus.map(menu => (
            <img src= "http://loremflickr.com/320/240/meal" alt={menu.title}
            key={menu.id}
            onClick={()=>hashHistory.push(`/menus/${menu.id}`)}
            />
          ))
        }
      </Coverflow>
    </StyleRoot>
    );
  }
}

export default RecomendedMenus;
