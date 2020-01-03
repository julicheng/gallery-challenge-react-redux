// import item from "./reducers/item";
// import items from "./reducers/items";
import pagination from "./reducers/pagination";
// import {
//   getOffset,
//   getFilteredItems,
//   getItem,
//   getFilter
// } from "./reducers/selectors";

describe("Pagination", () => {
  test("should handle setting the offset", () => {
    const initialState = {
      offset: 12,
      fetchFlag: true
    };
    const action = {
      type: "SET_OFFSET"
    };
    expect(pagination(initialState, action)).toBe({ offset: 24 });
  });
  test("should handle setting fetch to true");
  test("should handle setting fetch to false");
});
