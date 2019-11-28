import { SET_CURRENT_PAGE } from "../actions/action_types";

const initialState = {
  currentPage: 1,
  itemsPerPage: 4
};

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    default:
      return state;
  }
};

export default pagination;
