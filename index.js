import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/app";
import store from "./src/store/redux-store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
