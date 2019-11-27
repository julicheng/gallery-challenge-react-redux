import { FETCH_ITEM } from "../actions/action_types";

const initialState = {
  item: { title: "", description: "", url: "" }
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEM:
      return { ...state, item: action.payload };
    default:
      return state;
  }
};

export default items;
