import React from "react";
import { connect } from "react-redux";
import { store } from "../App";
import { setOffset, fetchItems } from "../actions";

const Pagination = props => {
  return (
    <nav>
      <button onClick={() => props.handleLoadMoreClick()}>Load more</button>
    </nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    handleLoadMoreClick: () => {
      dispatch(setOffset());
      dispatch(fetchItems(store.getState().pagination.offset));
    }
  };
};

export default connect(null, mapDispatchToProps)(Pagination);
