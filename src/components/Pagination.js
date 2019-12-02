import React from "react";
import { connect } from "react-redux";
import { setOffset, fetchItems, setFetchTrue } from "../actions";
import { getOffset } from "../reducers/selectors";

const Pagination = props => {
  return (
    <nav>
      <button onClick={() => props.handleLoadMoreClick(props.offset)}>
        Load more
      </button>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    offset: getOffset(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLoadMoreClick: offset => {
      dispatch(setFetchTrue());
      dispatch(setOffset());
      dispatch(fetchItems(offset));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
