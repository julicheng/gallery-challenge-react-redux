import { store } from "../App";
import {
  GET_FILTERED_ITEMS,
  FETCH_ITEMS,
  FETCH_ITEM,
  SET_CURRENT_PAGE,
  SET_PAGINATED_ITEMS
} from "../actions/action_types";

export const fetchItems = () => dispatch => {
  fetch(`http://185.121.204.130:8080/api/media/`)
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

export const getFilteredItems = evt => {
  const filter = evt;

  switch (filter) {
    case "none":
      return {
        type: GET_FILTERED_ITEMS,
        payload: store.getState().items.allItems
      };
    default:
      const newFilteredItems = store.getState().items.allItems.filter(item => {
        return item.tags.includes(filter);
      });
      return {
        type: GET_FILTERED_ITEMS,
        payload: newFilteredItems
      };
  }
};

export const setCurrentPage = (page = 1) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page
  };
};

export const setPaginatedItems = () => {
  const indexOfLastItem =
    store.getState().pagination.currentPage *
    store.getState().pagination.itemsPerPage;
  const indexOfFirstItem =
    indexOfLastItem - store.getState().pagination.itemsPerPage;
  const paginatedItems = store
    .getState()
    .items.filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  return {
    type: SET_PAGINATED_ITEMS,
    payload: paginatedItems
  };
};
