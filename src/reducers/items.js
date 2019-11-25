const initialState = {
  allItems: [],
  filteredItems: []
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FILTERED_ITEMS":
      return { ...state, filteredItems: action.payload };
    case "FETCH_ITEMS":
      return {
        ...state,
        filteredItems: action.payload,
        allItems: action.payload
      };
    default:
      return state;
  }
};

export default items;
