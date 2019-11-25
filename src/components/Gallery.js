import React, { Component } from "react";
import Item from "./Item";
import Filter from "./Filter";
import { connect } from "react-redux";
import { store } from "../App";

class Gallery extends Component {
  // fetch items from api and assign to allItems
  componentDidMount() {
    fetch(`http://185.121.204.130:8080/api/media/`)
      .then(response => response.json())
      .then(this.getItems)
      .catch(function() {
        console.log("Error getting items");
      });
  }

  // getItems = data => {
  //   this.setState(
  //     {
  //       allItems: data.media
  //     },
  //     () => {
  //       this.getFilteredItems();
  //     }
  //   );
  // };

  render() {
    return (
      <>
        <Filter />
        <div className="gallery">
          {store.getState().filteredItems.filteredItems.map((item, key) => {
            return <Item key={key} id={item._id} item={item} />;
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredItems: state.filteredItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // handleChange: evt => {
    //   dispatch(changeFilter(evt));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
