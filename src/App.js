import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

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
