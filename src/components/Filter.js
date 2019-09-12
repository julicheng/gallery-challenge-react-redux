import React from "react";

const Filter = props => {
  return (
    <select
      value={props.filter}
      onChange={event => props.handleChange(event.target.value)}
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

export default Filter;
