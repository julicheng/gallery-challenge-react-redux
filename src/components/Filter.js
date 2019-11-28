import React from "react";
import { connect } from "react-redux";
import { store } from "../App";
import { getFilteredItems, setCurrentPage, setPaginatedList } from "../actions";

const Filter = props => {
  return (
    <select onChange={props.handleFilterChange} aria-label="art category">
      <option value="none">Please select</option>
      <option value="abstract">Abstract</option>
      <option value="impressionism">Impressionism</option>
      <option value="art">Art</option>
      <option value="realism">Realism</option>
      <option value="watercolour">Watercolour</option>
      <option value="painting">Painting</option>
      <option value="modern">Modern</option>
    </select>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    handleFilterChange: evt => {
      dispatch(getFilteredItems(evt.target.value));
      dispatch(setPaginatedList());
      dispatch(setCurrentPage(store.getState().pagination.currentPage));
    }
  };
};

export default connect(null, mapDispatchToProps)(Filter);
