import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import MenusReducer from './menus_reducer';
import FilterReducer from './filters_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  menus: MenusReducer,
  filters: FilterReducer,
  searchResults: SearchReducer
});

export default RootReducer;
