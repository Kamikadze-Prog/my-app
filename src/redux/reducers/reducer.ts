import { combineReducers } from 'redux';

import toDoReducer from './toDoReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  toDoReducer,
  filterReducer,
});

export default rootReducer;
