import { store } from "../App";

export const fetchItems = items => {
  return {
    type: "FETCH_ITEMS",
    items
  };
};

export const fetchItem = item => {
  return {
    type: "FETCH_ITEM",
    item
  };
};

export const getFilteredItems = items => {
  return {
    type: "GET_FILTERED_ITEMS",
    items
  };
};

export const updateFilteredItems = evt => {
  const filter = evt.target.value;

  switch (filter) {
    case "none":
      return {
        type: "UPDATE_FILTERED_ITEMS",
        payload: store.getState().allItems.allItems
      };
    default:
      const newFilteredItems = store
        .getState()
        .allItems.allItems.filter(item => {
          return item.tags.includes(filter);
        });
      return {
        type: "UPDATE_FILTERED_ITEMS",
        payload: newFilteredItems
      };
  }
};
