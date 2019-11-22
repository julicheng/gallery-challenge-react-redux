import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Header title="Art Gallery" />
      <Router>
        <main>
          {/* render main component depending on url */}
          <Route exact path="/" component={Gallery} />
          <Route exact path="/item/:itemid" component={ItemDetail} />
        </main>
      </Router>
      <Footer />
    </Provider>
  );
};

export default App;
