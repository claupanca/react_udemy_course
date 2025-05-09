import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import store from "./store_redux";
import store from "./store_rtk.jsx";
import { deposit } from "./features/accounts/accountSlice_redux.jsx";

import { Provider } from "react-redux";

// Example -  this is not yet connected with the app
// store.dispatch(deposit(300));
// console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
