import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchItem, setFetchFalse } from "../actions";

class ItemDetail extends Component {
  // fetch item from api that matches the id the user has selected
  componentDidMount() {
    const itemId = this.props.match.params.itemid;
    console.log(itemId);

    this.props.init(itemId);
  }

  render() {
    return (
      <div className="itemDetail">
        <div className="imageSection">
          <img
            src={this.props.item.url}
            alt={this.props.item.title}
            className="largeImage"
          />
        </div>
        <div className="descriptionSection">
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.description}</p>
          <h3>
            <Link to={"/"}>Back to gallery</Link>
          </h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.item.item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    init: itemId => {
      dispatch(fetchItem(itemId));
      dispatch(setFetchFalse());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
