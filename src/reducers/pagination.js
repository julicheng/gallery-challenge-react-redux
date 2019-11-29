import { SET_OFFSET } from "../actions/action_types";

const initialState = {
  offset: 0
};

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case SET_OFFSET:
      return {
        ...state,
        offset: (state.offset += 12)
      };
    default:
      return state;
  }
};

export default pagination;
