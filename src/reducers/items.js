import {
  GET_FILTERED_ITEMS,
  FETCH_ITEMS,
  SET_FILTER
} from "../actions/action_types";
import Immutable from "immutable";

const initialState = {
  allItems: Immutable.List([]),
  filteredItems: Immutable.List([]),
  filter: "none"
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTERED_ITEMS:
      return { ...state, filteredItems: Immutable.fromJS(action.payload) };
    case FETCH_ITEMS:
      return {
        ...state,
        allItems: state.allItems.merge(action.payload)
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

export default items;
