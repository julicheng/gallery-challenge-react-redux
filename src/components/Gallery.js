import React, { Component } from "react";
import Item from "./Item";
import Filter from "./Filter";

class Gallery extends Component {
  state = {
    filter: "none",
    filteredItems: [],
    allItems: []
  };

  // fetch items from api and assign to allItems
  componentDidMount() {
    fetch(`http://185.121.204.130:8080/api/media/`)
      .then(response => response.json())
      .then(this.getItems)
      .catch(function() {
        console.log("Error getting items");
      });
  }

  getItems = data => {
    this.setState(
      {
        allItems: data.media
      },
      () => {
        this.getFilteredItems();
      }
    );
  };

  handleChange = event => {
    this.setState({ filter: event }, () => {
      this.getFilteredItems();
    });
  };

  // filter items when the select has been changed and assign to filteredItems
  getFilteredItems = () => {
    let filter = this.state.filter;
    if (filter === "none") {
      this.setState({ filteredItems: this.state.allItems });
    } else {
      let newFilteredItems = this.state.allItems.filter(item => {
        return item.tags.includes(filter);
      });
      this.setState({ filteredItems: newFilteredItems });
    }
  };

  render() {
    return (
      <>
        <Filter handleChange={this.handleChange} filter={this.state.filter} />
        <div className="gallery">
          {this.state.filteredItems.map((item, key) => {
            return <Item key={key} id={item._id} item={item} />;
          })}
        </div>
      </>
    );
  }
}

export default Gallery;
