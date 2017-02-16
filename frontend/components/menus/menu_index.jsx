import React from 'react';
import Coverflow from 'react-coverflow';
import { Link, hashHistory } from 'react-router';
import {StyleRoot} from 'radium';


class MenuIndex extends React.Component {
  componentDidMount() {
    this.props.fetchMenus();
  }

  render () {
    return (
    <StyleRoot>
      <Coverflow width="auto" height="auto"
        displayQuantityOfSide={2}
        navigation={false}
        enableScroll={true}
        clickable={true}
        active={0}
        media={{
         '@media (max-width: 900px)': {
           width: '600px',
           height: '200px'
         },
         '@media (min-width: 900px)': {
           width: '960px',
           height: '300px'
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

export default MenuIndex;
