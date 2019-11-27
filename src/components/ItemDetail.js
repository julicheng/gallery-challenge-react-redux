import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchItem } from "../actions";
import { store } from "../App";

class ItemDetail extends Component {
  // fetch item from api that matches the id the user has selected
  componentDidMount() {
    console.log(this.props.match.params);
    const itemId = this.props.match.params.itemid;
    this.props.fetchItem(itemId);
  }

  render() {
    return (
      <div className="itemDetail">
        <div className="imageSection">
          <img
            src={store.getState().item.item.url}
            alt={store.getState().item.item.title}
            className="largeImage"
          />
        </div>
        <div className="descriptionSection">
          <h2>{store.getState().item.item.title}</h2>
          <p>{store.getState().item.item.description}</p>
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
    item: state.item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItem: itemId => {
      dispatch(fetchItem(itemId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
