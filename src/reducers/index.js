import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import items from "./items";
import item from "./item";

export default combineReducers(
  {
    items,
    item
  },
  applyMiddleware(thunk)
);
