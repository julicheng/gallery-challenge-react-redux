import { store } from "../App";
import {
  GET_FILTERED_ITEMS,
  FETCH_ITEMS,
  FETCH_ITEM,
  SET_OFFSET,
  SET_FILTER
} from "../actions/action_types";

export const fetchItems = (offset = 0) => dispatch => {
  fetch(`http://185.121.204.130:8080/api/media?offset=` + offset)
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: FETCH_ITEMS,
        payload: res.media
      })
    )
    .catch(function() {
      console.log("Error getting items");
    });
  dispatch(getFilteredItems());
};

export const fetchItem = itemId => dispatch => {
  fetch(`http://185.121.204.130:8080/api/media/` + itemId)
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: FETCH_ITEM,
        payload: {
          title: res.title,
          description: res.description,
          url: res.url
        }
      })
    )
    .catch(function() {
      console.log("Error getting items");
    });
};

export const getFilteredItems = () => {
  const newfilter = store.getState().items.filter;
  console.log(store.getState().items.allItems);
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
