import React, { Component } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

class App extends Component {
  state = { filter: "none", filteredItems: [], allItems: [] };

  componentDidMount() {
    fetch(`http://axielldevtest.eastus2.cloudapp.azure.com:3000/api/media`)
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
      <React.Fragment>
        <Header title="Art Gallery" />
        <main>
          <Filter handleChange={this.handleChange} filter={this.state.filter} />
          <Gallery filteredItems={this.state.filteredItems} />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
