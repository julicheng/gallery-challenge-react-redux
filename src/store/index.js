import { createStore } from "redux";

const initialState = {
  filter: "none",
  filteredItems: [],
  allItems: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_FILTER":
      return Object.assign({}, state, { filter: action.payload });
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
