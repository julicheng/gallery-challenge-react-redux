import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Gallery />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
