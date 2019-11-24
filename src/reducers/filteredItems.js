const initialState = { filteredItems: [] };

const filteredItems = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FILTERED_ITEMS":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default filteredItems;
