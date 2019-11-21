import React from "react";
import { connect } from "react-redux";

const Filter = props => {
  return (
    <select
      value={props.filter}
      onChange={props.handleChange}
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
    count: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: evt => {
      const action = { type: "CHANGE_FILTER", payload: evt.target.value };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
