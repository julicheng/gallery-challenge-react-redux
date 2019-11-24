const initialState = { allItems: [] };

const allItems = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ITEMS":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default allItems;
