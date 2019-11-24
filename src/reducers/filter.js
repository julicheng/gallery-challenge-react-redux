const initialState = { filter: "none" };

const filter = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_FILTER":
      return action.payload;
    default:
      return state;
  }
};

export default filter;
