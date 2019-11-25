const initialState = {
  allItems: [],
  filteredItems: []
};

const items = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "GET_FILTERED_ITEMS":
      return { ...state, filteredItems: action.payload };
    case "ITEMS_FETCH_DATA_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        filteredItems: action.payload
      };
    default:
      return state;
  }
};

export default items;
