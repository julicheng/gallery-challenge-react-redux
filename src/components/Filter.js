import React from "react";
import { connect } from "react-redux";
import { getFilteredItems, setFilter } from "../actions";

const Filter = props => {
  return (
    <select
      value={props.filter}
      onChange={props.handleFilterChange}
      aria-label="art category"
    >
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

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    filter: state.items.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFilterChange: evt => {
      dispatch(setFilter(evt.target.value));
      dispatch(getFilteredItems());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
