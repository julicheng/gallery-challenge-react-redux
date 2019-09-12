import React, { Component } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

class App extends Component {
  state = { filter: "none" };

  handleChange = () => {
    console.log("hello");
  };
  render() {
    return (
      <React.Fragment>
        <Header title="Art Gallery" />
        <main>
          <Filter handleChange={this.handleChange} filter={this.filter} />
          <Gallery />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
