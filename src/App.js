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
      .then(this.getItems);
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
    // let filter = this.state.filter;
    if (this.state.filter == "none") {
      this.setState({ filteredItems: this.state.allItems });
    } else {
      this.setState({ filteredItems: [] });
    }
  };

  // getResults = () => {
  //   let filter = this.state.filter;
  //   let resultList = this.animeList.filter(title => {
  //     return title.genre.toLowerCase() === filter;
  //   });
  //   this.setState({ results: resultList });
  // };

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
