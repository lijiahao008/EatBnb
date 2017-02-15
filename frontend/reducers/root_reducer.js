import {combineReducers} from 'redux';

import FiltersReducer from './filters_reducer';
import SessionReducer from './session_reducer';
import MenusReducer from './menus_reducer';

const RootReducer = combineReducers({
  filters: FiltersReducer,
  session: SessionReducer,
  menus: MenusReducer
});

export default RootReducer;
