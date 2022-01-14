import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";

import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

// Establish connection to backend
const httpLink = createHttpLink({
  uri: "https://crwn-clothing.com",
});

// Create our cache in memory
const cache = new InMemoryCache();

// Make a client
const client = new ApolloClient({
  link: httpLink,
  cache,
});
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
