import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item extends Component {
  itemId = this.props.item._id;
  render() {
    return (
      <div>
        <Link to={"/item/" + this.itemId}>
          <img
            className="item"
            src={this.props.item.thumbnailUrl}
            alt={this.props.item.title}
          />
        </Link>
      </div>
    );
  }
}

export default Item;
