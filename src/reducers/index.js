import { combineReducers } from "redux";
import items from "./items";
import item from "./item";
import pagination from "./pagination";

export default combineReducers({
  items,
  item,
  pagination
});
