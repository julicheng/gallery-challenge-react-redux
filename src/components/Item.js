import React, { Component } from "react";

class Item extends Component {
  state = {};
  render() {
    return <img className="item" src={this.props.thumbnailUrl} alt="hello" />;
  }
}

export default Item;
