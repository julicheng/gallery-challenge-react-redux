import { FETCH_ITEM } from "../actions/action_types";
import Immutable from "immutable";

const initialState = {
  item: Immutable.Map({ title: "", description: "", url: "" })
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEM:
      return { ...state, item: Immutable.fromJS(action.payload) };
    default:
      return state;
  }
};

export default items;
