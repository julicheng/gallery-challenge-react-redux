import { store } from "../App";
import {
  GET_FILTERED_ITEMS,
  FETCH_ITEMS,
  FETCH_ITEM,
  SET_OFFSET,
  SET_FILTER
} from "../actions/action_types";

export const fetchItems = (offset = 0) => async dispatch => {
  try {
    const res = await fetch(
      `http://185.121.204.130:8080/api/media?offset=` + offset
    );

    const data = await res.json();

    dispatch({
      type: FETCH_ITEMS,
      payload: data.media
    });

    dispatch(getFilteredItems());
  } catch (error) {
    console.log(error);
  }
};

export const fetchItem = itemId => async dispatch => {
  try {
    const res = await fetch(`http://185.121.204.130:8080/api/media/` + itemId);
    const data = await res.json();

    dispatch({
      type: FETCH_ITEM,
      payload: {
        title: data.title,
        description: data.description,
        url: data.url
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getFilteredItems = () => {
  const newfilter = store.getState().items.filter;
  switch (newfilter) {
    case "none":
      return {
        type: GET_FILTERED_ITEMS,
        payload: store.getState().items.allItems
      };
    default:
      const newFilteredItems = store.getState().items.allItems.filter(item => {
        return item.tags.includes(newfilter);
      });
      return {
        type: GET_FILTERED_ITEMS,
        payload: newFilteredItems
      };
  }
};

export const setOffset = () => {
  return {
    type: SET_OFFSET
  };
};

export const setFilter = evt => {
  return {
    type: SET_FILTER,
    payload: evt
  };
};
