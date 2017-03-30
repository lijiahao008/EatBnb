import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import MenusReducer from './menus_reducer';
import FilterReducer from './filters_reducer';
import SearchReducer from './search_reducer';
import ReservationsReducer from './reservations_reducer';
import ConversationsReducer from './conversations_reducer';
import UsersReducer from './users_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  menus: MenusReducer,
  filters: FilterReducer,
  searchResults: SearchReducer,
  reservations: ReservationsReducer,
  conversations: ConversationsReducer,
  users: UsersReducer
});

export default RootReducer;
