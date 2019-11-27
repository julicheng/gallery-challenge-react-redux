import { SET_CURRENT_PAGE } from "../actions/action_types";

const initialState = {
  currentPage: 1
};

// const indexOfLastItem = currentPage * itemsPerPage;
// const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return state;
    default:
      return state;
  }
};

export default pagination;
