import React, { Component } from "react";
import Item from "./Item";
import Filter from "./Filter";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import { fetchItems } from "../actions";
class Gallery extends Component {
  // fetch items from api and assign to allItems
  componentDidMount() {
    this.props.init();
  }
  render() {
    return (
      <>
        <Filter />
        <div className="gallery">
          {this.props.filteredItems.map((item, key) => {
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
    filteredItems: state.items.filteredItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    init: () => {
      dispatch(fetchItems());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
