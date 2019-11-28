import {
  GET_FILTERED_ITEMS,
  FETCH_ITEMS,
  SET_PAGINATED_ITEMS
} from "../actions/action_types";

const initialState = {
  allItems: [],
  filteredItems: [],
  paginatedItems: []
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTERED_ITEMS:
      return { ...state, filteredItems: action.payload };
    case FETCH_ITEMS:
      return {
        ...state,
        filteredItems: action.payload,
        allItems: action.payload,
        // paginatedItems: action.payload.slice(0, 4)
        paginatedItems: action.payload
      };
    case SET_PAGINATED_ITEMS:
      return {
        ...state,
        paginatedItems: action.payload
      };
    default:
      return state;
  }
};

export default items;
