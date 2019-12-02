export const getOffset = state => {
  return state.pagination.offset;
};

export const getFilteredItems = state => {
  return state.items.filteredItems;
};

export const getItem = state => {
  return state.item.item;
};

export const getFilter = state => {
  return state.items.filter;
};
