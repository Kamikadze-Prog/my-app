import { combineReducers } from 'redux';

import items from '../Items';
import filterReducer from '../filterReducer';

const rootReducer = combineReducers({
  items,
  filterReducer,
});

export default rootReducer;
