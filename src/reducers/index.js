import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import filter from "./filter";
import filteredItems from "./filteredItems";
import allItems from "./allItems";

export default combineReducers(
  {
    filter,
    filteredItems,
    allItems
  },
  applyMiddleware(thunk)
);
