import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header title="Art Gallery" />
      <Router>
        <main>
          {/* render main component depending on url */}
          <Route exact path="/" component={Gallery} />
          <Route exact path="/item/:itemid" component={ItemDetail} />
        </main>
      </Router>
      <Footer />
    </>
  );
};

export default App;
