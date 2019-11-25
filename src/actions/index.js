import { store } from "../App";
import { GET_FILTERED_ITEMS } from "../actions/action_types";

export const fetchItems = () => dispatch => {
  console.log("fetchin");
  // const request = fetch(`http://185.121.204.130:8080/api/media/`)
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response.media);
  //     return response.media;
  //   })
  //   .catch(function() {
  //     console.log("Error getting items");
  //   });
  // console.log(request);
  // return {
  //   type: "FETCH_ITEMS",
  //   payload: request
  // };

  fetch(`http://185.121.204.130:8080/api/media/`)
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: "FETCH_ITEMS",
        payload: res.media
      })
    )
    .catch(function() {
      console.log("Error getting items");
    });
};

// const itemsFetchDataSuccess = items => {
//   return {
//     type: "ITEMS_FETCH_DATA_SUCCESS",
//     items
//   };
// };

export const fetchItem = id => {
  return {
    type: "FETCH_ITEM",
    id
  };
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
