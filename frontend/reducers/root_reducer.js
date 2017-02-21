import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import MenusReducer from './menus_reducer';
import UserReducer from './user_reducer';
import FilterReducer from './filters_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  menus: MenusReducer,
  user: UserReducer,
  filters: FilterReducer
});

export default RootReducer;
