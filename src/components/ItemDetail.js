import React from "react";

const ItemDetail = ({ match }) => {
  return (
    <>
      <p>{match.params.itemid}</p>
    </>
  );
};

export default ItemDetail;
