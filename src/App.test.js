import item from "./reducers/item";
import items from "./reducers/items";
import pagination from "./reducers/pagination";
import {
  getOffset,
  getFilteredItems,
  getItem,
  getFilter
} from "./reducers/selectors";
import { fromJS, Map, List } from "immutable";

describe("Item", () => {
  test("should handle fetching the item", () => {
    const initialState = {
      item: Map({ title: "", description: "", url: "#" })
    };
    const action = {
      type: "FETCH_ITEM",
      payload: {
        title: "test title",
        description: "test description",
        url: "#"
      }
    };
    expect(item(initialState, action)).toEqual({
      item: fromJS({
        title: "test title",
        description: "test description",
        url: "#"
      })
    });
  });
});

describe("Items", () => {
  test("should handle getting the filtered items", () => {
    const initialState = {
      allItems: List([]),
      filteredItems: List([]),
      filter: "abstract"
    };
    const action = {
      type: "GET_FILTERED_ITEMS",
      payload: ["test"]
    };
    expect(items(initialState, action)).toEqual({
      allItems: List([]),
      filteredItems: List(["test"]),
      filter: "abstract"
    });
  });
  test("should handle fetching the items", () => {
    const initialState = {
      allItems: List(["test", "test1", "test2"]),
      filteredItems: List([]),
      filter: "abstract"
    };
    const action = {
      type: "FETCH_ITEMS",
      payload: List(["test3", "test4"])
    };
    expect(items(initialState, action)).toEqual({
      allItems: List(["test", "test1", "test2", "test3", "test4"]),
      filteredItems: List([]),
      filter: "abstract"
    });
  });
  test("should handle setting the filter", () => {
    const initialState = {
      allItems: List([]),
      filteredItems: List([]),
      filter: "none"
    };
    const action = {
      type: "SET_FILTER",
      payload: "abstract"
    };
    expect(items(initialState, action)).toEqual({
      allItems: List([]),
      filteredItems: List([]),
      filter: "abstract"
    });
  });
});

describe("Pagination", () => {
  test("should handle setting the offset", () => {
    const initialState = {
      offset: 12,
      fetchFlag: true
    };
    const action = {
      type: "SET_OFFSET"
    };
    expect(pagination(initialState, action)).toEqual({
      fetchFlag: true,
      offset: 24
    });
  });
  test("should handle setting fetch to true", () => {
    const initialState = {
      offset: 12,
      fetchFlag: false
    };
    const action = {
      type: "SET_FETCH_TRUE"
    };
    expect(pagination(initialState, action)).toEqual({
      fetchFlag: true,
      offset: 12
    });
  });
  test("should handle setting fetch to false", () => {
    const initialState = {
      offset: 12,
      fetchFlag: true
    };
    const action = {
      type: "SET_FETCH_FALSE"
    };
    expect(pagination(initialState, action)).toEqual({
      fetchFlag: false,
      offset: 12
    });
  });
});
