import { SET_CURRENT_PAGE, SET_PAGINATED_LIST } from "../actions/action_types";

const initialState = {
  currentPage: 1,
  itemsPerPage: 4,
  paginatedList: []
};

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    case SET_PAGINATED_LIST:
      return {
        ...state,
        paginatedList: action.payload
      };
    default:
      return state;
  }
};

export default pagination;
