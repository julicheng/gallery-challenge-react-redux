import { FETCH_ITEM } from "../actions/action_types";
import Immutable, { Map } from "immutable";

const initialState = {
  item: Map({ title: "", description: "", url: "" })
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
