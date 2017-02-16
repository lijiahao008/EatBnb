import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import MenusReducer from './menus_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  menus: MenusReducer
});

export default RootReducer;
