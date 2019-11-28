import React, { Component } from "react";
import Item from "./Item";
import Filter from "./Filter";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import { store } from "../App";
import { fetchItems } from "../actions";
class Gallery extends Component {
  // fetch items from api and assign to allItems
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <>
        <Filter />
        <div className="gallery">
          {store.getState().items.filteredItems.map((item, key) => {
            return <Item key={key} id={item._id} item={item} />;
          })}
        </div>
        <Pagination />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredItems: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => {
      dispatch(fetchItems());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
