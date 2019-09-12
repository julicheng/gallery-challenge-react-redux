import React from "react";
import Item from "./Item";

const Gallery = props => {
  return (
    <div className="gallery">
      {props.filteredItems.map((item, key) => {
        return (
          <Item key={key} id={item._id} thumbnailUrl={item.thumbnailUrl} />
        );
      })}
    </div>
  );
};

export default Gallery;
