import { combineReducers } from "redux";
import filter from "./filter";
import filteredItems from "./filteredItems";
import allItems from "./allItems";
// import thunk from 'redux-thunk'

export default combineReducers({
  filter,
  filteredItems,
  allItems
  // applyMiddleware(thunk)
});
