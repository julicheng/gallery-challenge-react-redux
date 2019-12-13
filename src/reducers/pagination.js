// @flow
import {
  SET_OFFSET,
  SET_FETCH_TRUE,
  SET_FETCH_FALSE
} from "../actions/action_types";

type Pagination = {
  offset: number,
  fetchFlag: boolean
};

type Action = {
  type: String
};

const initialState: Pagination = {
  offset: 12,
  fetchFlag: true
};

const pagination = (state: Pagination = initialState, action: Action) => {
  switch (action.type) {
    case SET_OFFSET:
      return {
        ...state,
        offset: (state.offset += 12)
      };
    case SET_FETCH_TRUE:
      return {
        ...state,
        fetchFlag: true
      };
    case SET_FETCH_FALSE:
      return {
        ...state,
        fetchFlag: false
      };
    default:
      return state;
  }
};

export default pagination;
