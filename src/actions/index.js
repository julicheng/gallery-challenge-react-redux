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

export const changeFilter = evt => {
  return {
    type: "CHANGE_FILTER",
    payload: evt.target.value
  };
};
