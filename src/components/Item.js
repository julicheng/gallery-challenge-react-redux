import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import ItemInfo from "./ItemInfo";

class Item extends Component {
  itemId = this.props.item.id;
  url = "/item/" + this.itemId;
  render() {
    return (
      <div>
        <Link to={"/item"}>
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
