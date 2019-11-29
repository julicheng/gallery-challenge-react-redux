import React from "react";
import { connect } from "react-redux";
import { store } from "../App";
import { setOffset, fetchItems, getFilteredItems } from "../actions";

const Pagination = props => {
  const pageNumbers = [];
  for (
    let i = 1;
    i <=
    Math.ceil(
      store.getState().items.filteredItems.length /
        store.getState().pagination.itemsPerPage
    );
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <button onClick={() => props.handleLoadMoreClick()}>Load more</button>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    filteredItems: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLoadMoreClick: () => {
      dispatch(setOffset());
      dispatch(fetchItems(store.getState().pagination.offset));
      dispatch(getFilteredItems(store.getState().items.filter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
