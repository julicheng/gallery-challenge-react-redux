import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchItem, setFetchFalse } from "../actions";
import { getItem } from "../reducers/selectors";

class ItemDetail extends Component {
  // fetch item from api that matches the id the user has selected
  componentDidMount() {
    const itemId = this.props.match.params.itemid;
    this.props.init(itemId);
  }

  render() {
    return (
      <div className="itemDetail">
        <div className="imageSection">
          <img
            src={this.props.item.get("url")}
            alt={this.props.item.get("title")}
            className="largeImage"
          />
        </div>
        <div className="descriptionSection">
          <h2>{this.props.item.get("title")}</h2>
          <p>{this.props.item.get("description")}</p>
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
    item: getItem(state)
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
